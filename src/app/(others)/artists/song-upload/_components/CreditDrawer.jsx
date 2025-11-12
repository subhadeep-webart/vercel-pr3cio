'use client';

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import { useState } from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { addCrew } from "@/services/api/artist-api";

const CreditDrawer = () => {
    const queryClient = useQueryClient();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [formData, setFormData] = useState({
        name: '',
        role: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        role: ''
    });

    // React Query mutation
    const mutation = useMutation({
        mutationFn: addCrew,
        onSuccess: (data) => {
            toast.success('Crew member added!');
            queryClient.invalidateQueries({ queryKey: ['crews'] });
            onClose();
            resetForm();
        },
        onError: (error) => {
            toast.error(error.message || 'Failed to add crew member');
        }
    });

    const resetForm = () => {
        setFormData({ name: '', role: '' });
        setErrors({ name: '', role: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = () => {
        const newErrors = {
            name: formData.name.trim() === '' ? 'Credit name is required' : '',
            role: formData.role.trim() === '' ? 'Credit role is required' : '',
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error !== '');
        if (hasErrors) return;

        mutation.mutate(formData);
    };

    return (
        <>
            <button
                className="w-auto h-[1.88rem] leading-[1.88rem]  md:h-[2.88rem] md:leading-[2.88rem] bg-[#C6FF00] text-center rounded-xl px-5 text-black text-sm cursor-pointer"
                onClick={onOpen}
                type="button"
            >
                Add Crew
            </button>

            <Drawer isOpen={isOpen} size={"xs"} onClose={onClose}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Add Credit</DrawerHeader>
                            <DrawerBody>
                                <div className="mb-4">
                                    <label className="text-base text-[#D1CAD5] mb-2 block">Credits Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full rounded-md px-3 h-[3rem] text-sm border ${errors.name ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'} bg-[#2E2E2E] text-white`}
                                        placeholder="Credit Name"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                <div className="mb-4">
                                    <label className="text-base text-[#D1CAD5] mb-2 block">Credits Role</label>
                                    <input
                                        type="text"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className={`w-full rounded-md px-3 h-[3rem] text-sm border ${errors.role ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'} bg-[#2E2E2E] text-white`}
                                        placeholder="Credit Role"
                                    />
                                    {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                                </div>
                            </DrawerBody>

                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={handleSubmit}
                                    isDisabled={mutation.isPending}
                                >
                                    {mutation.isPending ? 'Adding...' : 'Add'}
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default CreditDrawer;
