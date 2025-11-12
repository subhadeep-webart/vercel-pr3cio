import Image from "next/image";
import { DELETE_ICON } from "@/utils/icons";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    RadioGroup,
    Radio,
} from "@heroui/react";
import toast from "react-hot-toast";
import { deleteArtistAlbumById } from "@/services/api/artist-api";
const DeleteAlbumModal = ({albumId}) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleDeleteSong = async () => {
        if (albumId) {
            const resp = await deleteArtistAlbumById(albumId)
            if (resp.status === "success") {
                toast.success(resp.message)
                onActionComplete?.()
                onOpenChange(false);
            }
        }
        onOpenChange();
    }

    const handleDeleteOpen = (e) => {
        e.preventDefault();      // prevent default link behavior
        e.stopPropagation();
        onOpen();
    }
    return (
        <>
            <button
                className="bg-[#191919] w-[1.38rem] h-[1.38rem] rounded-full flex justify-center items-center group border-1 border-[#989898] " onClick={(e) => handleDeleteOpen(e)}>
                <Image src={DELETE_ICON?.src} height={10} width={10} alt="Click to delete" />
            </button>
            <Modal isOpen={isOpen} placement={"center"} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Delete Album</ModalHeader>
                            <ModalBody>
                                <p>
                                    This album will be gone forever — are you sure you want to delete it?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="danger" onPress={handleDeleteSong}>
                                    Delete
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default DeleteAlbumModal;