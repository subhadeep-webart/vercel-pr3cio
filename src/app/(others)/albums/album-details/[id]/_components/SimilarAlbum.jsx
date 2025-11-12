import AlbumCard from '@/components/common/AlbumCard'

const SimilarAlbum = ({ artistName = '', similarAlbumDetails }) => {
    console.log("similarAlbumDetails",similarAlbumDetails)
    return (
        <>
            <h3 className='mb-4 mt-5 md:text-2xl text-base font-semibold pl-2 md:pl-0'>
                More By {artistName}
            </h3>
            <div className='grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 pl-2 md:pl-0'>
                {similarAlbumDetails?.length> 0 ? similarAlbumDetails?.map((albumDetails) => (
                    <AlbumCard
                        albumDetails={albumDetails}
                        key={albumDetails?._id}
                    />
                )) : (
                    <p className='text-gray-400 mb-2 md:text-base text-sm'>No similar albums found.</p>
                )}
            </div>
        </>
    )
}

export default SimilarAlbum
