'use client'

import { withAuthProtection } from "@/components/auth/protected-component"
import useAuth from "@/hooks/useAuth"
import { downloadAlbumById } from "@/services/api/album-ep"
import { getPaymentStatus } from "@/services/api/packages-api"
import { downloadSongById } from "@/services/api/song-api-service"
import { getUserProfile } from "@/services/api/user-ep"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"

const PaymentProcess = () => {
    const [status, setStatus] = useState('loading')
    const [userProfile, setUserProfile] = useState(null)
    const searchParams = useSearchParams()
    const sessionId = searchParams.get('session_id')
    const { saveSession } = useAuth()

    // Helper function to trigger file download
    const downloadFile = (url, fileName) => {
        const link = document.createElement('a')
        link.href = url
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    // Function to check payment status

    const checkPaymentStatus = async () => {
        try {
            const response = await getPaymentStatus(sessionId);

            if (response.data.success === 'success') {
                setStatus('success');

                // Handle file download if fileUrl is provided
                if (response.data.downloadSong || response.data.downloadAlbum) {
                    // const fileResponse = await axios.get(response.data.fileUrl, { responseType: 'blob' });
                    const fileResponse = response.data.downloadSong ? await downloadSongById(response.data.id) : await downloadAlbumById(response.data.id);

                    // Extract filename from Content-Disposition or use provided fileName
                    const contentDisposition = fileResponse.headers['content-disposition'];
                    let fileName = response.data.fileName || 'download.mp3'; // Use fileName from JSON or fallback
                    if (contentDisposition && contentDisposition.includes('attachment')) {
                        const filenameMatch = contentDisposition.match(/filename="(.+)"/);
                        if (filenameMatch && filenameMatch[1]) {
                            fileName = filenameMatch[1]; // Prefer Content-Disposition filename
                        }
                    }

                    // Convert file response to Blob and trigger download
                    const contentType = fileResponse.headers['content-type'] || 'audio/mpeg';
                    const blob = new Blob([fileResponse.data], { type: contentType });
                    const url = window.URL.createObjectURL(blob);
                    downloadFile(url, fileName);
                    window.URL.revokeObjectURL(url);
                }
            } else {
                setStatus('fail');
            }
        } catch (error) {
            setStatus('fail');
            // console.error('Error checking payment status:', error);
        }
    };

    useEffect(() => {
        if (!sessionId) return;
        checkPaymentStatus();
    }, [sessionId]);

    useEffect(() => {
        if (status === 'success') {
            const fetchUserProfile = async () => {
                try {
                    const data = await getUserProfile();
                    setUserProfile(data);
                    saveSession(data.userWithDetails);
                } catch (err) {
                    toast.error(err?.message);
                }
            };

            fetchUserProfile();
        }
    }, [status]);

    return (
        <div className='flex w-full min-h-screen items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black p-2 rounded-lg ml-6'>
            <div className='w-full max-w-md space-y-6 rounded-xl bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-600 p-10 text-center items-center justify-center shadow-2xl'>
                {status === 'loading' && (
                    <div className='text-lg font-semibold text-gray-200'>
                        <div className='flex animate-pulse items-center justify-center space-x-3'>
                            <div className='h-8 w-8 animate-bounce rounded-full bg-gray-500'></div>
                            <div className='h-8 w-8 animate-bounce rounded-full bg-gray-500 delay-200'></div>
                            <div className='delay-400 h-8 w-8 animate-bounce rounded-full bg-gray-500'></div>
                        </div>
                        <p className='mt-4'>Checking payment status...</p>
                    </div>
                )}

                {status === 'success' && (
                    <>
                        <FaCheckCircle className='mx-auto text-7xl text-green-400' />
                        <h1 className='text-3xl font-semibold text-gray-100'>
                            Payment Successful
                        </h1>
                        <p className='text-gray-300'>
                            Thank you! Your payment was processed successfully.
                        </p>
                        <Link
                            href='/'
                            className='mt-4 inline-block rounded-lg bg-green-500 px-6 py-2 text-white transition-colors hover:bg-green-600'>
                            Go to Home
                        </Link>
                    </>
                )}

                {(status === 'fail' || status === 'error') && (
                    <>
                        <FaTimesCircle className='mx-auto text-7xl text-red-400' />
                        <h1 className='text-3xl font-semibold text-gray-100'>
                            Payment Failed
                        </h1>
                        <p className='text-gray-300'>
                            Oops! Something went wrong with your payment. Please
                            try again later.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default withAuthProtection(PaymentProcess);
