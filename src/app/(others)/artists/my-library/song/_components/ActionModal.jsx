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
import { deleteSongById } from "@/services/api/song-api-service";
const ActionModal = ({ trackId, onActionComplete }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleDeleteSong = async () => {
        if (trackId) {
            const resp = await deleteSongById(trackId)
            if (resp.status === "success") {
                toast.success(resp.message)
                onActionComplete?.()
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
                            <ModalHeader className="flex flex-col gap-1">Delete Song</ModalHeader>
                            <ModalBody>
                                <p>
                                    This draft song will be gone forever — are you sure you want to delete it?
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

export default ActionModal;