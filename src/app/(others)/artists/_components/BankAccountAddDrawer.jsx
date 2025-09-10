import Loader from "@/components/ui/Loader";
import useAuth from "@/hooks/useAuth";
import { createStripeAccount } from "@/services/api/user-api";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

const BankAccountAddDrawer = () => {
    const { user } = useAuth();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // Automatically open the drawer on mount
    useEffect(() => {
        if (user && !user?.bankAccountId) {
            onOpen();
        }
    }, [onOpen, user]);

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
        <Drawer
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="bottom"
            hasBackdrop={true}
            hideCloseButton={true}
        >
            <DrawerContent>
                {(onClose) => (
                    <>
                        <DrawerHeader className="flex flex-col gap-1">
                            ADD BANK ACCOUNT
                        </DrawerHeader>
                        <DrawerBody>
                            <div className="w-full text-center">
                                <button
                                    class="text-sm text-black h-[2.5rem] leading-[2.5rem] px-5 bg-[#C6FF00] rounded-full inline-block max-w-[12.06rem] w-full text-center transition-all duration-300 mt-6 cursor-pointer" onClick={handleBankAccountMutate}>
                                    {isBankAccountLoading ? <Loader /> : "Add Bank Account"}
                                </button>
                            </div>
                        </DrawerBody>
                        {/* <DrawerFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </DrawerFooter> */}
                    </>
                )}
            </DrawerContent>
        </Drawer >
    );
};

export default BankAccountAddDrawer;
