import Image from "next/image";
import Link from "next/link";
import { publicImages } from "@/utils/publicImages";
const AuthHeader = () => {
    return (
        <header className="flex px-5 py-4 justify-between items-center fixed top-0 z-10">
            <div className="headLeft flex justify-between items-center">
                <span className="w-[4.48rem] sm:w-[4.48rem] md:w-[4.48rem] lg:w-[4.48rem] xl:w-[5.48rem] 2xl:w-[6.48rem]"><Link
                    href="/"><Image height={40} width={40} src={publicImages.logo} alt="pr3cio-logo" loading="lazy"
                        className="w-full" /></Link></span>
            </div>
        </header>
    )
}

export default AuthHeader;