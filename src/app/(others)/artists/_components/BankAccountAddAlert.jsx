
import { Alert, Button } from "@heroui/react";
import Image from "next/image";
import Loader from "@/components/ui/Loader";
import useAuth from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { createStripeAccount } from "@/services/api/user-api";
import { SEND_ICON } from "@/utils/icons";
import toast from "react-hot-toast";

const BankAccountAddAlert = () => {
    const { user } = useAuth();
    const { mutate: handleBankAccountMutate, isPending: isBankAccountLoading } = useMutation({
        mutationFn: createStripeAccount,
        onSuccess: (data) => {
            console.log("Data=======:>", data);
            if (data?.url) {
                // Open Stripe redirect URL in a new tab
                window.open(data.url, '_blank')
            }
        },
        onError: (error) => {
            console.error('Stripe account creation failed:', error)
            console.log('Stripe account creation failed:', error)
            // Optionally show toast or notification
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
            console.log("errorMessage",errorMessage)
            toast.error(errorMessage)
        }
    })
    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 py-8 px-4">
            <Alert
                className="py-4"
                color="danger"
                description="Add your bank — start sharing your sound with the world!"
                endContent={
                    <button
                        class="text-sm text-black h-[2.5rem] leading-[2.5rem] px-5 bg-[#C6FF00] rounded-full inline-block max-w-[12.06rem] w-full text-center transition-all duration-300 cursor-pointer" onClick={handleBankAccountMutate}>
                        {isBankAccountLoading ? <Loader /> : <div className="flex w-full justify-between items-center">
                            <p>Add Bank Account</p>
                            <Image src={SEND_ICON?.src} alt="Click to bank account open" width={10} height={10} />
                        </div>}
                    </button>
                }
                title="Add Your Bank Account"
                variant="faded"
                isClosable={false}
            />
        </div>
    )
}

export default BankAccountAddAlert