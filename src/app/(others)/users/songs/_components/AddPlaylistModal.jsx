import ErrorText from '@/components/ui/ErrorText'
import Loader from '@/components/ui/Loader'
import queryConstants from '@/constants/query-constants'
import { useCreatePlaylist } from '@/hooks/useCreatePlaylist'
import { addToFavorite } from '@/services/api/album-ep'
import { addPlaylist } from '@/services/api/playlist-api'
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Textarea,
    useDisclosure,
} from '@heroui/react'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { useMemo } from 'react'
import toast from 'react-hot-toast'
import * as Yup from 'yup'

const AddPlaylistModal = () => {
    const { handleAddPlaylist, isLoading } = useCreatePlaylist();
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    // const handleAddPlaylist = async () => {
    //     onOpenChange()
    // }

    const handleAddPlaylistOpen = (e) => {
        e.preventDefault()
        e.stopPropagation()
        onOpen()
    }

    const initialValues = {
        title: '',
    }

    const validationSchema = useMemo(
        () =>
            Yup.object().shape({
                title: Yup.string().required('Playlist title is required'),
            }),
        []
    )

    const onSubmit = async (values, { resetForm }) => {
        const payload = {
            title: values.title,
        }

        try {
            await handleAddPlaylist(values)
            resetForm()
            onOpenChange(false) // closes the modal
            // alternatively: you can pass onClose from inside render prop and call it there
        } catch (error) {
            console.log("Error logged=======>", error);
            toast.error('Submission failed.')
        }
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        setFieldValue,
    } = formik

    return (
        <>
            <button
                className='group flex items-center justify-center rounded-full border-1 border-[#989898] bg-[#191919] text-xs px-2 py-2'
                onClick={(e) => handleAddPlaylistOpen(e)}>
                {/* <i className='bi bi-plus-circle'></i> */}
                Create Playlist
            </button>

            <Modal
                isOpen={isOpen}
                placement={'center'}
                onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col gap-1'>
                                Add Playlist
                            </ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleSubmit} onReset={handleReset}>
                                    <div className='relative mb-5'>
                                        <label
                                            htmlFor='title'
                                            className='mb-2 block text-sm font-medium text-[#D1CAD5] md:text-base'>
                                            Title
                                        </label>
                                        <input
                                            id='title'
                                            type="text"
                                            name="title"
                                            placeholder="Enter playlist title"
                                            className='h-[3rem] w-full rounded-md border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E] px-3 text-sm'
                                            value={values.title}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.title &&
                                            errors.title ? (
                                            <ErrorText
                                                errorMessage={errors.title}
                                            />
                                        ) : null}
                                    </div>

                                    {/* <div className="mb-4">
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-medium text-white">
                                            Description
                                        </label>
                                        <Textarea
                                            name="description"
                                            placeholder="Enter playlist description"
                                            variant="faded"
                                            value={values.description}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={touched.description && !!errors.description}
                                            errorMessage={errors.description}
                                        />
                                    </div> */}

                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color='primary'
                                    variant='light'
                                    onPress={onClose}>
                                    Close
                                </Button>
                                <Button
                                    color='danger'
                                    onPress={handleSubmit}
                                    isLoading={isLoading}
                                    disabled={isLoading}
                                >
                                    {isLoading ? <Loader /> : 'Add'}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddPlaylistModal;
