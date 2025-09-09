"use client"
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { InputOtp } from "@heroui/react";
import useAuth from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { otpValidationSchema } from "@/utils/formValidation";
import { getEmailFromCookie } from "@/utils/auth-utils";
import queryConstants from "@/constants/query-constants";
import { verifyEmail } from '@/services/api/user-ep'
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "../ui/Loader";

const EmailVerifyForm = () => {
    const router=useRouter();
    const email = sessionStorage.getItem("email") ?? ""
    const { saveSession } = useAuth()

    const { mutateAsync } = useMutation({
        mutationKey: [queryConstants.verifyEmail],
        mutationFn: verifyEmail,
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            otp: '',
        },
        validationSchema: otpValidationSchema,
        onSubmit: async(values, {resetForm,setSubmitting}) => {
            try {
                const data = await mutateAsync({ ...values, email: getEmailFromCookie() });
                toast.success('Verify email successfully!');
                saveSession(data.user);
                router.push("/");
                resetForm();
            } catch (err) {
                toast.error(err?.message);
            } finally {
                setSubmitting(false);
            }
        },
    })

    const { errors, touched, setFieldValue } = formik

    useEffect(() => {
        setFieldValue('email', getEmailFromCookie())
    }, [setFieldValue])

    const handleOtpComplete = (otp) => {
        formik.setFieldValue('otp', otp)
        formik.submitForm()
    }
    return (
        <section className="login">
            <div className="flex flex-col md:flex-row ">
                <div className="w-[50%]">
                    <Image
                        height={700}
                        width={400}
                        src="/images/login/login.webp"
                        alt=""
                        className="h-full 2xl:h-screen w-full object-cover"
                        quality={50}
                    />
                </div>
                <div className="w-[50%] bg-[#191919] relative bg-[url('/images/login/wave.webp')] bg-no-repeat bg-top-right flex justify-center items-center p-4 relative">
                    <div className="max-w-[27.38rem] w-full m-auto">
                        <center>
                            <h1 className="font-semibold text-[2.25rem]">
                                Please Check Your Email
                            </h1>
                            <p className="text-base text-[#A3A3A3] mb-8">
                                We have sent an code to{' '}
                                <span className='font-semibold text-primary'>
                                    {email}
                                </span>
                            </p>
                        </center>
                        <form
                            onSubmit={formik.handleSubmit}
                            onReset={formik.handleReset}>
                            <div className="mb-5 relative flex justify-center items-center">
                                <InputOtp
                                    length={6}
                                    value={formik.values.otp}
                                    onValueChange={(value) => {
                                        formik.setFieldValue('otp', value)
                                    }}
                                    onComplete={handleOtpComplete}
                                    autoFocus
                                    size='lg'
                                    variant='faded'
                                    classNames={{
                                        segmentWrapper: 'lg:gap-6',
                                    }}
                                    isInvalid={!!errors.otp && touched.otp}
                                    errorMessage={errors.otp}
                                />
                            </div>

                            <div className="mb-5 relative">
                                <button
                                    type="submit"
                                    className="bg-[#C6FF00] w-full text-sm text-black h-[3rem] leading-[3rem] text-center rounded-4xl cursor-pointer hover:bg-[#afe200] transition-colors"
                                >
                                     {formik.isSubmitting ? <Loader size="sm"/> : "Submit"}
                                </button>
                            </div>
                        </form>
                        {/* <center>
                            <h6 className="mt-6 mb-6 text-sm font-semibold">
                                {"Don't have an account?"}{" "}
                                <Link
                                    href="/user-signup"
                                    className="text-[#4D41FA] underline"
                                >
                                    Sign Up
                                </Link>
                            </h6>
                            <p className="text-sm text-[#B5B5B5]">OR</p>
                            <Link
                                href="#"
                                className="border border-[rgba(255,255,255,0.15)] w-full text-sm text-[#9D9D9D] h-[3.5rem] leading-[3.5rem] text-center rounded-4xl cursor-pointer hover:bg-white transition-colors flex justify-center items-center mt-7"
                            >
                                <span>
                                    <Image
                                        height={20}
                                        width={20}
                                        src="/images/login/google.webp"
                                        alt="google-login"
                                        loading="lazy"
                                        className="mr-3"
                                    />
                                </span>
                                Log in to continue
                            </Link>
                        </center> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmailVerifyForm;