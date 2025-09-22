import AlbumCard from '@/components/common/AlbumCard'

const SimilarAlbum = ({ artistName = '', similarAlbumDetails }) => {
    console.log("similarAlbumDetails",similarAlbumDetails)
    return (
        <>
            <h3 className='mb-4 mt-5 text-2xl font-semibold'>
                More By {artistName}
            </h3>
            <div className='grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5'>
                {similarAlbumDetails?.length> 0 ? similarAlbumDetails?.map((albumDetails) => (
                    <AlbumCard
                        albumDetails={albumDetails}
                        key={albumDetails?._id}
                    />
                )) : (
                    <p className='text-gray-400 mb-2'>No similar albums found.</p>
                )}
            </div>
        </>
    )
}

export default SimilarAlbum
