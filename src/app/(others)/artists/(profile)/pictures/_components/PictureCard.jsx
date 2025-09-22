const PictureCard = ({ imageUrl }) => {
    return (
        <div class=''>
            <img
                src={imageUrl}
                alt='skipBack'
                loading='lazy'
                class='h-[10.13rem] w-full rounded-[0.75rem] object-cover'
            />
        </div>
    )
}

export default PictureCard;