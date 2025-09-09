import Loader from "@/components/ui/Loader";
import useAuth from "@/hooks/useAuth";
import { createStripeAccount } from "@/services/api/user-api";
import { useMutation } from "@tanstack/react-query";
import ProfileUpdateForm from "./ProfileUpdateForm";

const BankAccountVerificationMark = () => {
    const { user } = useAuth();

    const { mutate: handleBankAccountMutate, loading: isBankAccountLoading } = useMutation({
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
            // Optionally show toast or notification
        }
    })

    return (
        <div class="col-span-12 mb-2 pr-6 text-right w-full">
            {user?.bankAccountId ? <div className="w-full text-right">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#148505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
                </button>
            </div> : (
                <button
                    class="text-sm text-black h-[2.5rem] leading-[2.5rem] px-5 bg-[#C6FF00] rounded-full inline-block max-w-[12.06rem] w-full text-center transition-all duration-300 mt-6 cursor-pointer" onClick={handleBankAccountMutate}>
                    {isBankAccountLoading ? <Loader /> : "Add Bank Account"}
                </button>
            )}
        </div>
    )
}

export default BankAccountVerificationMark;