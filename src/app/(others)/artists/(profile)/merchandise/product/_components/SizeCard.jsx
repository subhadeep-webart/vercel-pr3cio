const SizeCard = ({ size, selectedSize, setSelectedSize }) => {
    return (
        <label className='relative'>
            <input
                type='radio'
                name='size'
                value={size}
                checked={
                    selectedSize ===
                    size
                }
                onChange={() =>
                    setSelectedSize(
                        size
                    )
                }
                className='peer absolute opacity-0'
            />
            <div className='block w-[2.80rem] cursor-pointer rounded-[0.3rem] border border-[#5A5B58] py-2 text-center text-sm text-[#9D9D9D] peer-checked:border-white peer-checked:text-white'>
                {size}
            </div>
        </label>
    )
}

export default SizeCard;