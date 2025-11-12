import Link from "next/link";
const MerchandiseCard = ({ product, artist_id }) => {
    return (
        <div key={product?._id} class="flowBox group relative z-0 mb-3 w-full rounded-[0.75rem] bg-[linear-gradient(35deg,rgba(248,68,176,1)_0%,rgba(77,65,250,1)_100%)]
         p-5 after:absolute after:right-[0.0625rem] after:top-[0.0625rem] after:z-[-1] after:h-[calc(100%-0.125rem)]
          after:w-[calc(100%-0.125rem)] after:rounded-[0.75rem] after:bg-[#282828] after:content-['']">
            <img
                src={product?.imageUrl?.[0]}
                alt='skipBack'
                loading='lazy'
                class='mb-3 h-[7.13rem] md:h-[15.13rem] w-full rounded-[0.75rem] object-cover'
            />
            <div class='flex justify-between'>
                <h3 class='text-sm md:text-xl font-semibold'> {product?.name}</h3>
                <h4 class='text-sm md:text-lg font-bold text-[#F844B0]'>
                    $ {product?.price}
                </h4>
            </div>
            <p class='mb-6 mt-1 text-xs text-[#9D9D9D] line-clamp-1'>
                {product?.description}
            </p>
            <Link
                href={`/artists/merchandise/product?id=${artist_id}&product_id=${product._id}`}
                class='absolute bottom-[-1.5rem] left-0 right-0 m-auto inline-block h-[3.00rem] w-full max-w-[13.06rem] 
                rounded-full bg-[#C6FF00] px-10 text-center text-sm leading-[3.00rem] text-black opacity-0
                 transition-all duration-300 group-hover:opacity-100'>
                Buy Now
            </Link>
        </div>
    )
}

export default MerchandiseCard;