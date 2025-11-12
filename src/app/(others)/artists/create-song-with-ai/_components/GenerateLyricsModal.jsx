import { useEffect, useState } from 'react'
import { generateLyricsWithAI } from '@/services/api/artist-api'
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from '@heroui/react'
import { useMutation } from '@tanstack/react-query'

import { GENERATE_AI } from '@/utils/icons'
import useApp from '@/hooks/useApp'

import AiGeneratedDisplayAreaComponent from './AiGeneratedDisplayAreaComponent'
import GenerateLyricsTextArea from './GenerateLyricsTextArea'
import UploadMusic from './UploadMusic'
import { getSocket } from '@/configs/socket-config'
import useAuth from '@/hooks/useAuth'

const GenerateLyricsModal = ({ setSelected }) => {
    const socket = getSocket();
    const { user } = useAuth();
    const [isLyricsGenerating, setIsLyricsGenerating] = useState(false);
    const [lyricsTaskId, setLyricsTaskId] = useState(null);
    const [lyricsPrompt, setLyricsPrompt] = useState('')
    const { setAiGeneratedLyrics, setSongAIContext } = useApp()
    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log('lyricsPrompt', lyricsPrompt)

    const handleOpen = () => {
        console.log('handleOpen')
        setLyricsPrompt('')
        // setAiGeneratedLyrics([]);
        const actionPayload = {
            type: "customMode",
            typeState: true
        }
        setSongAIContext(actionPayload);
        onOpen()
    }

    const mutation = useMutation({
        mutationFn: generateLyricsWithAI,
        onSuccess: (data) => {
            if (data?.data && data?.data?.taskId) {
                setLyricsTaskId(data?.data?.taskId);
            }
        },
        onError: (error) => {
            toast.error(error.message || 'Failed to add crew member')
        },
    })

    useEffect(() => {
        if (lyricsTaskId) {
            const handleSuccess = (response) => {
                console.log("Lyrics Generated======>", response);
                if (response?.userId != user?._id) return;
                if (response?.data && response?.data?.length) {
                    setIsLyricsGenerating(false);
                    setAiGeneratedLyrics(response?.data);
                }
            };

            // const handleError = (response) => {
            //     console.error("WATCH_COUNT_ERROR:", response.message);
            // };

            socket.on("lyricsDatas", handleSuccess);
            // socket.on("UPDATE_WATCH_COUNT_MOVIE_ERROR", handleError);
        }

        return () => {
            socket.off('lyricsDatas');
        };
    }, [lyricsTaskId])

    return (
        <>
            <UploadMusic
                image={GENERATE_AI?.src}
                title='Generate with AI'
                description='Let AI bring your ideas to life'
                onClickHandler={handleOpen}
            />
            <Modal
                isOpen={isOpen}
                size={'4xl'}
                onClose={onClose}
                classNames={{
                    base: "bg-[url('/images/generate_lyrics_bg.png')] bg-center bg-no-repeat bg-transparent",
                }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <AiGeneratedDisplayAreaComponent
                                    isGenerating={isLyricsGenerating}
                                    onClose={onClose}
                                    setLyricsPrompt={setLyricsPrompt}
                                    setSelected={setSelected}
                                />
                                <GenerateLyricsTextArea
                                    mutation={mutation}
                                    lyricsPrompt={lyricsPrompt}
                                    setLyricsPrompt={setLyricsPrompt}
                                    isLyricsGenerating={isLyricsGenerating}
                                    setIsLyricsGenerating={setIsLyricsGenerating}
                                />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default GenerateLyricsModal
