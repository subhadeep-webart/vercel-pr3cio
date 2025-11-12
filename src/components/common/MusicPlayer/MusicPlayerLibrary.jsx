'use client'

import { useState } from 'react'
import { FaMusic, FaRegFolder } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowDropright } from 'react-icons/io'
import { TiPlus } from 'react-icons/ti'

const MusicPlayerLibrary = () => {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className='text-base font-semibold'>Your Library</h2>
                <button className='flex items-center'>
                    <span className='mr-2'>Create</span>
                    <TiPlus />
                </button>
            </div>

            <div className='mt-4'>
                {!showSearch ? (
                    <button
                        onClick={() => setShowSearch(true)}
                        className='flex items-center space-x-2 text-gray-400 hover:text-white'>
                        <FiSearch size={18} />
                    </button>
                ) : (
                    <div className='flex items-center space-x-2'>
                        <FiSearch size={18} className='text-gray-400' />
                        <input
                            type='text'
                            placeholder='Search your library...'
                            className='w-full rounded-md bg-gray-800 px-3 py-1 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500'
                            autoFocus
                        />
                        <button
                            onClick={() => setShowSearch(false)}
                            className='text-sm text-gray-400 hover:text-white'>
                            ✕
                        </button>
                    </div>
                )}
            </div>

            <div className='mt-6'>
                <div className='flex items-center justify-between rounded-lg py-2 hover:bg-gray-800'>
                    <div className='flex items-center'>
                        <div className='mr-4 rounded-lg bg-gray-600 p-2'>
                            <FaRegFolder />
                        </div>
                        <div className=''>
                            <h3 className='font-medium text-white'>
                                New Folder
                            </h3>
                            <p className='text-xs text-gray-400'>0 playlists</p>
                        </div>
                    </div>
                    <button className='text-gray-400'>
                        <IoMdArrowDropright size={20} />
                    </button>
                </div>
                <div className='flex items-center justify-between rounded-lg py-2 hover:bg-gray-800'>
                    <div className='flex items-center'>
                        <div className='mr-4 rounded-lg bg-gray-600 p-2'>
                            <FaMusic />
                        </div>
                        <div className=''>
                            <h3 className='playlist-title font-medium text-white'>
                                My Playlist #3
                            </h3>
                            <p className='playlist-count text-xs text-gray-400'>
                                Playlist • Webart Morning
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between rounded-lg py-2 hover:bg-gray-800'>
                    <div className='flex items-center'>
                        <div className='mr-4 rounded-lg bg-gray-600 p-2'>
                            <FaRegFolder />
                        </div>
                        <div className=''>
                            <h3 className='font-medium text-white'>
                                New Folder
                            </h3>
                            <p className='text-xs text-gray-400'>0 playlists</p>
                        </div>
                    </div>
                    <button className='text-gray-400'>
                        <IoMdArrowDropright size={20} />
                    </button>
                </div>
                <div className='flex items-center justify-between rounded-lg py-2 hover:bg-gray-800'>
                    <div className='flex items-center'>
                        <div className='mr-4 rounded-lg bg-gray-600 p-2'>
                            <FaMusic />
                        </div>
                        <div className=''>
                            <h3 className='playlist-title font-medium text-white'>
                                My Playlist #3
                            </h3>
                            <p className='playlist-count text-xs text-gray-400'>
                                Playlist • Webart Morning
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicPlayerLibrary
