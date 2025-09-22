import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from "@heroui/react"

const CreditDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <button
                className="w-auto h-[2.88rem] leading-[2.88rem] bg-[#C6FF00] text-center rounded-xl px-5 text-black text-sm cursor-pointer" onClick={() => onOpen()} type="button">
                Add
            </button>
            <Drawer isOpen={isOpen} size={"xs"} onClose={onClose}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Add Credit</DrawerHeader>
                            <DrawerBody>
                                <div className="mb-2 relative col-span-12 md:col-span-5">
                                    <label htmlFor="" className="text-base text-[#D1CAD5] mb-2 block">Credits Name</label>
                                    <input type="text"
                                        className="w-full rounded-md px-3 h-[3rem] text-sm  border-1 border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                        placeholder="Song category" />
                                </div>
                                <div className="mb-2 relative col-span-12 md:col-span-6">
                                    <label htmlFor="" className="text-base text-[#D1CAD5] mb-2 block">Credits Role</label>
                                    <input type="text"
                                        className="w-full rounded-md px-3 h-[3rem] text-sm  border-1 border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                        placeholder="Select" />
                                </div>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Add
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default CreditDrawer;