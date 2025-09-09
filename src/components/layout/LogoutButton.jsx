import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

const LogoutButton = () => {
    const { logout } = useAuth();
    const handleLogout = async () => {
        await logout();
        toast.success("Logout Successfully");
    }
    return (
        <li>
            <button
                className='group flex w-full items-center rounded-[0.3rem_0_0_0.3rem] px-2 py-2 text-xs font-medium text-white transition-colors hover:bg-[#505736] hover:shadow-[-3px_0px_0px_0px_#C6FF00_inset] sm:text-xs md:text-[0.94rem]'
                onClick={handleLogout}
            >
                <span className='mr-2 w-[1.36rem] flex-[0_0_1.36rem] text-center'>
                    <svg
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='stroke-current text-[#fff] transition-colors group-hover:text-[#C6FF00]'>
                        <path
                            d='M11.3999 8.99983H1M1 8.99983L3.79997 6.59985M1 8.99983L3.79997 11.3998'
                            strokeWidth='1.4'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M6.60156 4.99996C6.61125 3.25995 6.68841 2.31763 7.30311 1.70294C8.00607 1 9.13742 1 11.4001 1H12.2001C14.4628 1 15.5942 1 16.2971 1.70294C17.0001 2.40587 17.0001 3.53723 17.0001 5.79995V12.1999C17.0001 14.4626 17.0001 15.5939 16.2971 16.2969C15.6824 16.9116 14.7401 16.9888 12.9999 16.9985M6.60156 12.9999C6.61125 14.7399 6.68841 15.6822 7.30311 16.2969C7.81615 16.8099 8.55734 16.9486 9.79997 16.986'
                            strokeWidth='1.4'
                            strokeLinecap='round'
                        />
                    </svg>
                </span>
                Logout
            </button>
        </li>
    )
}

export default LogoutButton;