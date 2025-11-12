import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from '@heroui/react';
import AddPlaylistModal from './AddPlaylistModal';
import { getAllPlayLists } from '@/services/api/playlist-api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import PlaylistDropdown from './PlaylistDropdown';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { addToFavorite } from '@/services/api/album-ep';
import queryConstants from '@/constants/query-constants';
import Loader from '@/components/ui/Loader';

const AddToPlaylistModal = ({ trackId, type = "song" }) => {
    const queryClient = useQueryClient();
    const { data } = useQuery({
        queryKey: ['allPlaylists'], // unique key for caching
        queryFn: getAllPlayLists,
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });

    const { mutate: addToFavoriteMutate, status: addToFavoriteStatus, isPending } =
        useMutation({
            mutationKey: [queryConstants.addToFavorite],
            mutationFn: addToFavorite,
            onSuccess: (data) => {
                // queryClient.invalidateQueries({
                //     queryKey: [queryConstants.getSongs],
                // })
                // queryClient.invalidateQueries({
                //     queryKey: [queryConstants.inAppDownload, { type: 'song' }],
                // })
                // queryClient.invalidateQueries({
                //     queryKey: [queryConstants.getFavoriteSongsList, { type: 'song' }],
                // })
                queryClient.invalidateQueries({ queryKey: ['allPlaylists'] });
                toast.success(data?.message ?? "Song added to playlist successfully")
            },
            onError: (error) => {
                toast.error(error?.message)
            },
        })

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const allPlaylistsData = data?.data ?? [];


    const formik = useFormik({
        initialValues: {
            playListId: '',
        },
        validationSchema: Yup.object({
            playListId: Yup.string().required('Please select a playlist'),
        }),
        onSubmit: async (values, { resetForm }) => {
            console.log("Valuess====>", values);
            const payload = { id: trackId, type, addToPlayList: true, ...values };
            console.log("Payload====>", payload);
            await addToFavoriteMutate(payload);
            resetForm();
            onOpenChange(false); // close modal
        },
    });

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    } = formik;

    const handleAddToPlaylistOpen = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onOpen();
    };

    return (
        <>
            <button
                className="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898]"
                onClick={handleAddToPlaylistOpen}
            >
                <i className="bi bi-plus-circle"></i>
            </button>

            <Modal isOpen={isOpen} placement={'center'} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-between mt-4">
                                Add To Playlist <AddPlaylistModal />
                            </ModalHeader>
                            <ModalBody>
                                {/* Form wrapper */}
                                <form onSubmit={handleSubmit}>
                                    <PlaylistDropdown
                                        playLists={allPlaylistsData}
                                        name="playListId"
                                        value={values.playListId}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        touched={touched.playListId}
                                        errors={errors.playListId}
                                    />
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button
                                    color="danger"
                                    onPress={handleSubmit}
                                    disabled={!values?.playListId || isPending}
                                >
                                    {isPending ? <Loader /> : "Add"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddToPlaylistModal;
