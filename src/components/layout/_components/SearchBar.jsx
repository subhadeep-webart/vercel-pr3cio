'use client'

import { useEffect, useRef, useState } from 'react'
import { getHomePageSearch } from '@/services/api/user-api'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import queryConstants from '@/constants/query-constants'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const inputRef = useRef(null)
    const router = useRouter()

    const { data, status } = useQuery({
        queryKey: [queryConstants.homePageSearch, { search: searchTerm }],
        queryFn: () =>
            searchTerm
                ? getHomePageSearch({ page: 1, limit: 3, search: searchTerm })
                : null,
        enabled: searchTerm.length > 0,
        debounceTime: 500,
    })

    console.log('data search', data)

    const searchData = data?.data ?? {}
    console.log('searchData', searchData)

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
        setIsDropdownOpen(e.target.value.length > 0)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !inputRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleItemClick = (item, type) => {
        console.log('Clicked:', type, item)
        if (type === 'artist') {
            router.push(`/artists/bio?id=${item._id}`)
        } else if (type === 'song') {
            router.push(`/song-details/${item._id}`)
        } else if (type=== "album"){
            router.push(`/albums/album-details/${item._id}`)
        }
        setIsDropdownOpen(false)
        setSearchTerm('')
    }

    return (
        <div className='searchBox relative mr-3 hidden sm:block'>
            <div className='relative'>
                <input
                    ref={inputRef}
                    type='text'
                    placeholder='Search music, artist'
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onFocus={() => searchTerm && setIsDropdownOpen(true)}
                    className='h-[2.50rem] rounded-full border-1 border-solid border-[#d3d3d3a1] bg-[linear-gradient(135deg,rgba(211,211,211,0.2)_0%,rgba(152,152,152,0.2)_100%)] px-5 py-0 text-xs text-[#d3d3d3] md:w-[11.63rem] xl:w-[13.63rem] 2xl:w-[14.63rem]'
                />
                <button
                    type='submit'
                    className='absolute right-2 top-1.5 inline-block h-[1.81rem] w-[1.81rem] cursor-pointer rounded-full border-0 bg-white text-center leading-[1rem]'>
                    <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        className='inline-block'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M10.8147 10.7916L14.0145 14.0145M12.5357 6.62049C12.5357 9.88737 9.88739 12.5357 6.62051 12.5357C3.35364 12.5357 0.705322 9.88737 0.705322 6.62049C0.705322 3.35362 3.35364 0.705299 6.62051 0.705299C9.88739 0.705299 12.5357 3.35362 12.5357 6.62049Z'
                            stroke='#6F6F6F'
                            strokeWidth='1.40097'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </button>

                {isDropdownOpen && searchTerm && (
                    <div
                        ref={dropdownRef}
                        className='absolute top-full z-50 mt-2 max-h-96 w-full overflow-hidden rounded-lg border border-gray-600 bg-[#2A2929] shadow-lg md:w-[11.63rem] xl:w-[13.63rem] 2xl:w-[14.63rem]'>
                        {status === 'pending' && (
                            <div className='px-4 py-3 text-sm text-gray-400'>
                                Loading...
                            </div>
                        )}

                        {status === 'error' && (
                            <div className='px-4 py-3 text-sm text-red-400'>
                                Error fetching data
                            </div>
                        )}

                        {status === 'success' && (
                            <>
                                {searchData?.artists?.length > 0 && (
                                    <div className='border-b border-gray-500'>
                                        <div className='px-2 py-2 text-xs font-semibold uppercase text-gray-300'>
                                            Artists
                                        </div>
                                        {searchData?.artists?.map((artist) => (
                                            <div
                                                key={artist?._id}
                                                onClick={() =>
                                                    handleItemClick(
                                                        artist,
                                                        'artist'
                                                    )
                                                }
                                                className='flex cursor-pointer items-center space-x-2 px-4 py-2 text-sm text-gray-200 hover:bg-gray-700'>
                                                {/* <img
                                                    src={`https://via.placeholder.com/32x32/FF5733/FFFFFF?text=Art`}
                                                    alt={artist?.name}
                                                    className='h-6 w-6 rounded-full object-cover'
                                                /> */}
                                                <div className='flex h-6 w-6 items-center justify-center rounded-full border border-gray-500'>
                                                    <i class='bi bi-person'></i>
                                                </div>
                                                <span>{artist?.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {searchData?.albums?.length > 0 && (
                                    <div className='border-b border-gray-500'>
                                        <div className='px-2 py-2 text-xs font-semibold uppercase text-gray-300'>
                                            Albums
                                        </div>
                                        {searchData?.albums?.map((album) => (
                                            <div
                                                key={album?.id}
                                                onClick={() =>
                                                    handleItemClick(
                                                        album,
                                                        'album'
                                                    )
                                                }
                                                className='flex cursor-pointer items-center space-x-2 px-4 py-2 text-sm text-gray-200 hover:bg-gray-700'>
                                                <div className='flex h-6 w-6 items-center justify-center rounded-full border border-gray-500'>
                                                    <i class='bi bi-file-music'></i>
                                                </div>
                                                <span>{album?.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {searchData?.songs?.length > 0 && (
                                    <div>
                                        <div className='px-2 py-2 text-xs font-semibold uppercase text-gray-300'>
                                            Songs
                                        </div>
                                        {searchData?.songs?.map((song) => (
                                            <div
                                                key={song?._id}
                                                onClick={() =>
                                                    handleItemClick(
                                                        song,
                                                        'song'
                                                    )
                                                }
                                                className='flex cursor-pointer items-center space-x-2 px-4 py-2 text-sm text-gray-200 hover:bg-gray-700'>
                                                <div className='flex h-6 w-6 items-center justify-center rounded-full border border-gray-500'>
                                                    <i class='bi bi-music-note'></i>
                                                </div>

                                                <span>{song?.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {searchData?.artists?.length === 0 &&
                                    searchData?.albums?.length === 0 &&
                                    searchData?.songs?.length === 0 && (
                                        <div className='px-4 py-3 text-sm text-gray-400'>
                                            No results found
                                        </div>
                                    )}
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchBar
