'use client'

import MusicPlayerDetails from './MusicPlayerDetails'
import MusicPlayerLibrary from './MusicPlayerLibrary'
import MusicPlayerSongs from './MusicPlayerSongs'

const MusicPlayerMain = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-2'>
                {/* <div className='col-span-2 h-[650px] overflow-y-auto px-4'>
                    <MusicPlayerLibrary />
                </div> */}

                <div className='col-span-12 md:col-span-9 h-[650px] overflow-y-auto overflow-x-hidden rounded-2xl shadow-lg px-2'>
                    <MusicPlayerSongs />
                </div>

                <div className='hidden md:block col-span-3 h-[650px] overflow-y-auto rounded-2xl shadow-lg'>
                    <MusicPlayerDetails />
                </div>
            </div>
        </>
    )
}

export default MusicPlayerMain;
