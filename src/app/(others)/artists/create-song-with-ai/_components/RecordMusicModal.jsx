'use client'

import { Modal, ModalBody, ModalContent, useDisclosure } from '@heroui/react'

import { RECORD } from '@/utils/icons'

import styles from '../createsong.module.scss'
import RecordMusicBody from './RecordMusicBody'
import UploadMusic from './UploadMusic'

const RecordMusicModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleOpen = () => {
        console.log('handleOpen')
        onOpen()
    }
    return (
        <>
            <UploadMusic
                image={RECORD?.src}
                title='Record Music'
                description='Turn moments into melodies'
                onClickHandler={handleOpen}
            />

            <Modal
                isOpen={isOpen}
                size='lg'
                onClose={onClose}
                className='bg-transparent p-0'>
                <ModalContent className={`${styles.gradient_border} `}>
                    {(onClose) => (
                        <div className={`${styles.gradient_border_inner}`}>
                            <ModalBody>
                                <RecordMusicBody />
                            </ModalBody>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default RecordMusicModal
