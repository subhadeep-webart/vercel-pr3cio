'use client'

import { useCallback, useMemo, useState } from 'react'
import { fileUpload } from '@/services/api/file-upload-api'
import {
    Button,
    CircularProgress,
    Modal,
    ModalBody,
    ModalContent,
} from '@heroui/react'
import { useMutation } from '@tanstack/react-query'
import { Accept, useDropzone } from 'react-dropzone'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { MdOutlineFileUpload } from 'react-icons/md'

import queryConstants from '@/constants/query-constants'

type FileUploaderProps = {
    onSuccess: (url: string) => void
    isOpen: boolean
    onClose: () => void
    accept: Accept
    maxSize?: number // in MB
    isMulti?:boolean
}
const FileUploader = (props: FileUploaderProps) => {
    const { isOpen, onClose, onSuccess, accept,isMulti=false } = props
    const [progress, setProgress] = useState(0)

    const supportedFileTypes = useMemo(() => {
        return Object.values(accept)
            .flat() // Flatten nested arrays
            .map((ext) => ext.replace('.', '').toUpperCase())
            .join(', ')
    }, [accept])

    const { mutateAsync, status } = useMutation({
        mutationKey: [queryConstants.fileUpload],
        mutationFn: (file: File) => fileUpload(file, setProgress),
    })

    const onDrop = useCallback(
        (files: File[]) => {
            const reader = new FileReader()
            reader.readAsArrayBuffer(files[0])
            reader.onload = () => {
                mutateAsync(files[0]).then((data) => {
                    onSuccess(data.url)
                    onClose()
                    setProgress(0)
                })
            }
        },
        [mutateAsync, onClose, onSuccess]
    )

    const { getInputProps, getRootProps, inputRef } = useDropzone({
        onDrop,
        accept,
    })

    const handleClick = () => {
        inputRef.current?.click()
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            placement='center'
            isDismissable={false}>
            <ModalContent>
                <ModalBody className='p-8'>
                    {status === 'pending' ? (
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <CircularProgress
                                classNames={{
                                    svg: 'w-36 h-36 drop-shadow-md',
                                    indicator: 'stroke-primary',
                                    track: 'stroke-primary/10',
                                    value: 'text-3xl font-semibold text-primary',
                                }}
                                showValueLabel={true}
                                strokeWidth={4}
                                value={progress}
                            />
                            <p className='text-subtitle font-bold'>Uploading</p>
                        </div>
                    ) : (
                        <div className='space-y-6'>
                            <div
                                {...getRootProps()}
                                className='flex cursor-pointer flex-col items-center gap-3 rounded-medium border-2 border-dashed border-primary bg-primary/10 p-4 text-center'>
                                <IoCloudUploadOutline className='text-4xl text-primary' />
                                <p className='text-subtitle font-semibold'>
                                    Drag and Drop files to upload
                                </p>
                                <p className='text-body3 text-secondary'>
                                    Supported files: {supportedFileTypes}
                                </p>
                                <input
                                    {...getInputProps()}
                                    className='hidden'
                                />
                            </div>
                            <div className='flex flex-col items-center gap-3'>
                                <Button
                                    type='button'
                                    size='sm'
                                    className='font-semibold;
'
                                    startContent={
                                        <MdOutlineFileUpload className='text-2xl' />
                                    }
                                    onPress={handleClick}>
                                    Upload From Your Device
                                </Button>
                            </div>
                        </div>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default FileUploader
