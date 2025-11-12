'use client'

import useApp from '@/hooks/useApp'
import { useState } from 'react'
import CreateSongUI from './_components/CreateSongUI'
import MyLibrary from './_components/MyLibrary'
import SongwritersCorner from './_components/SongwritersCorner'

const CreateSongWithAI = () => {
  const { isCreateSongAISidebarOpen } = useApp();

  return (
    <>
      <div className=' w-full overflow-x-hidden md:flex'>
        <div
          className={`${isCreateSongAISidebarOpen ? 'md:w-[75%]' : 'md:w-[95%]'} `}>
          <CreateSongUI />
          <SongwritersCorner />
        </div>

        {/* Sidebar (MyLibrary) */}
        <div
          className={`transition-opacity duration-75 ${isCreateSongAISidebarOpen ? 'md:w-[25%] opacity-100' : 'md:w-[5%] opacity-0'}`}>
          <MyLibrary />
        </div>
      </div>

      {/* <div className="md:hidden">
        <div >
          <CreateSongUI />
          {isCreateSongAISidebarOpen && (
            <div>
              <MyLibrary />
            </div>
          )}
          <SongwritersCorner />
        </div>

      </div> */}
    </>
  )
}

export default CreateSongWithAI
