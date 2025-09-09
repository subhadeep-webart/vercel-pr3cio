import { publicImages } from "@/utils/publicImages";
import Link from "next/link";
import Image from "next/image";
import AuthHeader from "@/components/layout/AuthHeader";

const AuthLayout = ({ children }) => {
    return (
        <>
            <AuthHeader />
            {children}
        </>
    )
}

export default AuthLayout;