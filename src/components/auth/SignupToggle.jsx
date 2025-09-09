"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
const SignupToggle = () => {
    const pathname = usePathname();
    console.log("Path Name======>", pathname);
    return (
        <div
            className="absolute top-[1rem] left-[-4rem] 2xl:top-[15%] bg-[url('/images/login/shadow.webp')] bg-no-repeat bg-cover py-4 bg-center text-center">
            <Link
                href="/user-signup"
                className={`group w-[7.56rem] h-[2.63rem] rounded-md px-4 font-semibold text-base flex justify-center items-center mt-2 mb-2 border border-[#2E2E2E] 
        ${(pathname === "/user-signup") ? "bg-black text-[#7B265D]" : "bg-[#2E2E2E] text-[#9C9C9C] hover:bg-black"}`
                }
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`mr-1 transition-colors duration-300 ${pathname === "/user-signup" ? "fill-current text-[#7B265D]" : "fill-current text-black group-hover:text-[#7B265D]"
                        }`}
                >
                    <path d="M22.8808 13.8577C22.8808 7.48846 18.0596 2.26923 12.0885 2.26923C6.11734 2.26923 1.25195 7.48846 1.25195 13.8577C1.25195 15.3615 1.51734 16.8654 2.04811 18.2808C2.66734 20.0058 4.21542 21.2442 6.07311 21.2885C6.60388 21.2885 7.04618 20.8462 7.04618 20.3154V14.7865C7.04618 14.2558 6.60388 13.8135 6.07311 13.8135C5.10003 13.8135 4.17118 14.1673 3.46349 14.6981C3.41926 14.3885 3.41926 14.1231 3.41926 13.8135C3.41926 8.59423 7.31157 4.39231 12.0885 4.39231C16.8654 4.39231 20.7577 8.63846 20.7577 13.8135C20.7577 14.1231 20.7577 14.4327 20.7135 14.6981C20.0058 14.1231 19.1212 13.7692 18.1039 13.7692C17.5731 13.7692 17.1308 14.2115 17.1308 14.7423V20.2269C17.1308 20.7577 17.5731 21.2 18.1039 21.2C19.1654 21.2 20.2712 20.8019 20.9789 20.0058C21.7308 19.2096 22.0846 18.325 22.3943 17.2635C22.7039 16.2019 22.8808 15.0519 22.8808 13.8577Z" />
                </svg>
                User
            </Link>

            <Link
                href="/artist-signup"
                className={`group w-[7.56rem] h-[2.63rem] rounded-md px-4 font-semibold text-base flex justify-center items-center mt-2 mb-2 border border-[#2E2E2E] 
        ${(pathname === "/artist-signup") ? "bg-black text-[#7B265D]" : "bg-[#2E2E2E] text-[#9C9C9C] hover:bg-black"}`}
            >
                <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`mr-1 transition-colors duration-300 ${(pathname === "/artist-signup") ? "fill-current text-[#7B265D]" : "fill-current text-black group-hover:text-[#7B265D]"
                        }`}
                >
                    <g clipPath="url(#clip0_331_17246)">
                        <path d="M9.88845 11.561C9.03041 10.7421 8.35296 9.72579 7.95103 8.53313L2.25535 13.9738C1.00827 15.1642 0.8703 16.983 1.79563 18.311L0.211632 19.8229C-0.0705439 20.092 -0.0705439 20.5288 0.211632 20.798C0.493851 21.0673 0.950952 21.0673 1.23313 20.798L2.81751 19.2856C4.21967 20.1709 6.12886 20.023 7.36051 18.8473L13.0643 13.4069C11.8368 13.0192 10.8064 12.4374 9.88845 11.561ZM8.82485 13.5514L7.80335 14.5264C7.52113 14.7958 7.06403 14.7958 6.78185 14.5264C6.49968 14.2573 6.49968 13.8205 6.78185 13.5514L7.80335 12.5763C8.08553 12.3069 8.54271 12.3069 8.82485 12.5763C9.10707 12.8454 9.10707 13.2822 8.82485 13.5514Z" />
                        <path d="M20.1037 1.81023C17.9943 -0.203306 14.782 -0.534303 12.3018 0.803422C12.297 0.808016 12.2873 0.812609 12.2825 0.817203C11.2558 1.37452 10.454 2.13959 9.86975 3.12031C9.86494 3.12491 9.86017 3.1295 9.85536 3.13869C8.48105 5.45853 8.75699 8.53068 10.9101 10.5859C12.9255 12.5099 16.0913 13.0012 18.712 11.5927C18.7168 11.5881 18.7264 11.5835 18.7312 11.5789C19.7579 11.0217 20.5597 10.2565 21.144 9.27586C21.1488 9.27126 21.1536 9.26207 21.1584 9.25748C22.5598 6.88998 22.2132 3.82373 20.1037 1.81023ZM18.5289 10.0619L11.459 3.31341C11.7859 2.89752 12.049 2.64621 12.4848 2.33425L19.5547 9.08271C19.2278 9.49869 18.9647 9.74996 18.5289 10.0619Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_331_17246">
                            <rect width="22" height="21" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                Artist
            </Link>
        </div>
    )
}

export default SignupToggle;