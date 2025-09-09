"use client"

import Loader from "@/components/ui/Loader";
import useAuth from "@/hooks/useAuth";
import { createStripeAccount } from "@/services/api/user-api";
import { useMutation } from "@tanstack/react-query";
import BankAccountVerificationMark from "./_components/BankAccountVerificationMark";
import useUserProfileForm from "../../(common)/profile/_hook/useUserProfileForm";
import ProfileUpdateForm from "./_components/ProfileUpdateForm";
const Biography = () => {
    const { user } = useAuth();

    return (
        <>
            <div class="grid grid-cols-12 bg-[#2A2929] rounded-[0.876rem] py-4">
                <BankAccountVerificationMark />
                <ProfileUpdateForm/>
            </div>


        </>
    )
};

export default Biography;