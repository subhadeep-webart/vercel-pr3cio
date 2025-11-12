
"use client"
import { useState } from 'react'
import styles from '../createsong.module.scss'
import AddSong from './AddSong'
import PickVibe from './PickVibe'

const CreateSongUI = () => {
    const [selected, setSelected] = useState([])
    return (
        <>
            <div className={styles.create_song_container}>
                <div className={styles.pick_vibe_container}>
                    <AddSong setSelected={setSelected} />
                </div>
                <div className={styles.pick_vibe_container}>
                    <PickVibe selected={selected} setSelected={setSelected} />
                </div>
            </div>
        </>
    )
}

export default CreateSongUI
