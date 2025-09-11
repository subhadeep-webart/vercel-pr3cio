import Loader from "@/components/ui/Loader";
import useAuth from "@/hooks/useAuth";
import { createStripeAccount } from "@/services/api/user-api";
import { SEND_ICON } from "@/utils/icons";
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
import Image from "next/image";

const BankAccountAddDrawer = () => {
    const { user } = useAuth();
    console.log("Userrrr=> bak drwaer", user);
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
            classNames={{ wrapper: "bg-transparent px-4" }}
        >
            <DrawerContent className="!my-4">
                {(onClose) => (
                    <>
                        {/* <DrawerHeader className="flex flex-col gap-1">
                            ADD BANK ACCOUNT
                        </DrawerHeader> */}
                        <DrawerBody className="bg-[url(/img/bank_account_bg_image.png)] bg-no-repeat bg-cover bg-center">
                            <div className="w-full flex justify-between px-4 py-4">
                                <div id="bank_account_text" className="w-96 space-y-4">
                                    <h3 className="text-xl font-semibold">Add Your Bank Account</h3>
                                    <p className="text-base font-normal">
                                        Add your bank — start sharing your sound with the world!
                                    </p>
                                </div>
                                <div id="bank_account_add">
                                    <button
                                        class="text-sm text-black h-[2.5rem] leading-[2.5rem] px-5 bg-[#C6FF00] rounded-full inline-block max-w-[12.06rem] w-full text-center transition-all duration-300 cursor-pointer" onClick={handleBankAccountMutate}>
                                        {isBankAccountLoading ? <Loader /> : <div className="flex w-full justify-between items-center">
                                            <p>Add Bank Account</p>
                                            <Image src={SEND_ICON?.src} alt="Click to bank account open" width={10} height={10} />
                                        </div>}
                                    </button>
                                </div>


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
