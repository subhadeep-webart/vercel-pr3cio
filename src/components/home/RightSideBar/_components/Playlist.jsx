import PlaylistCard from "./PlaylistCard";

const Playlist = ({ playlists }) => {
    console.log("Playlist Data=====> inner content", playlists);
    return (
        <div className='rounded-2xl bg-[#2A2929] px-5 py-5'>
            <p className='text-sm'>Playlists</p>
            <div className='searchBox relative mt-4'>
                <input
                    type='text'
                    placeholder='Search your playlist'
                    className='h-[2.50rem] w-full rounded-[0.63rem] border-1 border-solid border-[#4D4D4D] bg-[#323131] px-5 py-0 pl-10 text-xs text-[#d3d3d3]'
                />
                <button
                    type='submit'
                    className='absolute left-1 top-1.5 inline-block h-[1.81rem] w-[1.81rem] cursor-pointer leading-[1rem]'>
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
                            stroke-width='1.40097'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </svg>
                </button>
            </div>
            <div className='playLists h-[18rem] overflow-y-auto overflow-x-hidden [scrollbar-width:none]'>
                {
                    playlists?.map((playlist) => (<PlaylistCard playlistDetails={playlist} key={playlist?._id} />))
                }
            </div>
        </div>
    )
}

export default Playlist;