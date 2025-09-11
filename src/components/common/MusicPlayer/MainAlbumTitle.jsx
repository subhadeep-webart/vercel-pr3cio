const MainAlbumTitle = ({ trackDetails }) => {
    const { artwork, title, artist } = trackDetails;
    return (
        <>
            <img src={artwork} alt="cover" loading="lazy"
                className="m-auto rounded-[0.75rem] max-w[12.50rem] h-[15.63rem] object-cover" />
            <h2 className="text-sm font-semibold mt-3">{artist}</h2>
            <p className="truncate text-xs w-[12.25rem] m-auto text-[#C3C3C3]">{title}</p>
        </>
    )
}

export default MainAlbumTitle;