import { GENERATE_AI, MUSIC_NOTES, RECORD } from '@/utils/icons'

import GenerateLyricsModal from './GenerateLyricsModal'
import UploadMusic from './UploadMusic'
import { Tooltip } from '@heroui/react'
import RecordMusicModal from './RecordMusicModal'

const UploadGenerateRecord = ({ setSelected }) => {
    return (
        <>
            <div className='flex flex-col md:flex-row space-y-2 md:space-x-2 w-[100%]'>

                <UploadMusic
                    image={MUSIC_NOTES?.src}
                    title='Upload Music'
                    description='Share your sound with the world'
                    isPointer={true}
                />
                <GenerateLyricsModal setSelected={setSelected} isPointer={false} />
                {/* <UploadMusic
                    image={RECORD?.src}
                    title='Record Music'
                    description='Turn moments into melodies'
                    isPointer={true}
                /> */}
                <RecordMusicModal />
            </div>
        </>
    )
}

export default UploadGenerateRecord
