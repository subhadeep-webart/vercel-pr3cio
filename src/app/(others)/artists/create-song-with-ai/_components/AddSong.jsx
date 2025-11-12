'use client'

import useApp from '@/hooks/useApp'

import styles from '../createsong.module.scss'
import SimpleCustom from './SimpleCustom'
import SongTitle from './SongTitle'
import UploadGenerateRecord from './UploadGenerateRecord'

const AddSong = ({setSelected}) => {
    //    const { isCreateSongAISidebarOpen } = useApp();
    return (
        <>
            <div className={styles.add_song_wrapper}>
                <div className='flex w-full flex-col items-start justify-center gap-28'>
                    <SimpleCustom />
                    <SongTitle />
                </div>
                <UploadGenerateRecord setSelected={setSelected}/>
            </div>
        </>
    )
}

export default AddSong
