import Link from "next/link";

const NoAlbumFoundComponent = ({message}) => {
    return (
        <div className="w-2/3 text-white">
            <p className="">
                {message}
            </p>
            <Link href={"/users/albums-library/latest"} className="text-sm text-black h-[2.5rem] leading-[2.5rem] px-5 bg-[#C6FF00] rounded-full inline-block max-w-[12.06rem] w-full text-center transition-all duration-300 mt-6 cursor-pointer">
                Browse Albums
            </Link>
        </div>
    )
}

export default NoAlbumFoundComponent;