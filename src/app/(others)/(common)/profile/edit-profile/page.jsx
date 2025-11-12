"use client"

import useAuth from "@/hooks/useAuth";
import { IoIosArrowBack } from "react-icons/io";
import useUserProfileForm from "../_hook/useUserProfileForm";
import ReactPhoneInput from 'react-phone-input-2';
import Loader from "@/components/ui/Loader";

const EditProfile = () => {
    const { user } = useAuth();

    console.log("User Details=======>", user);

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        handleOpenAvatarUpload,
        handleCloseAvatarUpload,
        isOpenAvatarUpload,
        handleAvatarUpload,
        handleRemoveAvatar,
        handleResetPassword,
        albums,
        songs,
    } = useUserProfileForm();

    console.log("Values comign from =========>", values);
    return (
        <>
            <div className="flex items-start flex-wrap w-full justify-end pl-6">
                <div className="bg-[#333232] w-full rounded-[0.75rem]">
                    <div className="planBox ">
                        <div
                            className="py-10 px-8 mb-6 bg-size-[100%] bg-no-repeat bg-[url('/images/user/bg2.webp')] bg-bottom min-h-[30rem]">
                            <div className="flex justify-between mb-5">
                                <h2 className="font-semibold text-[1.56rem]"> <a href="/profile"
                                    className="inline-block w-[2.38rem] h-[2.25rem] rounded-[0.75rem] border-1 border-[#848484] border-solid mr-2 leading-[2.25rem] text-center text-[1rem]">
                                    {/* <i className="bi bi-chevron-left"></i> */}
                                    <IoIosArrowBack size={30} />
                                </a> Edit
                                    Profile
                                    Information
                                </h2>
                            </div>
                            <form action="" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-12 gap-4 md:gap-x-10 auto-cols-auto">
                                    <div className="col-span-12 mt-6">
                                        <label for="" className="text-base text-[#D1CAD5]">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="bg-[#2E2E2E] border border-[#404040] w-full h-[2.50rem] d dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] rounded-[0.45rem] px-5 text-sm mt-2"
                                            placeholder="Enter your name"
                                        />
                                        {touched.name && errors.name && (
                                            <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                                        )}
                                    </div>
                                    <div className="col-span-12 mt-6">
                                        <label for="" className="text-base text-[#D1CAD5]">Email</label>
                                        <input
                                            type="email"
                                            name="name"
                                            value={values.email}
                                            readOnly
                                            className="bg-[#2E2E2E] border border-[#404040] w-full h-[2.50rem] d dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] rounded-[0.45rem] px-5 text-sm mt-2"
                                            placeholder="Enter your name"
                                        />

                                    </div>
                                    <div className="col-span-12 mt-6">
                                        <div className='relative mb-4'>
                                            <ReactPhoneInput
                                                country={'us'}
                                                value={values.phone}
                                                onChange={(phone) => handleChange({ target: { name: 'phone', value: phone } })}
                                                onBlur={() => handleBlur({ target: { name: 'phone' } })}
                                                inputProps={{
                                                    name: 'phone',
                                                    required: true,
                                                    className:
                                                        'w-full rounded-md pl-12 h-[3rem] text-sm border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E] text-white',
                                                }}
                                                containerClass='w-full'
                                                inputClass='!bg-[#2E2E2E] !border !border-[rgba(255,255,255,0.15)] !text-white'
                                                dropdownStyle={{
                                                    backgroundColor: '#2E2E2E',
                                                }}
                                                buttonClass='!bg-[#2E2E2E]'
                                                placeholder='Enter Number'
                                            />
                                            {touched.phone && errors.phone && (
                                                <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
                                            )}
                                        </div>
                                    </div>
                                    {/* <div className="col-span-12 mt-6">
                                        <label for="" className="text-base text-[#D1CAD5]">Confirm New Password</label>
                                        <input type="text" id=""
                                            className="bg-[#2E2E2E] border border-[#404040] w-full h-[2.50rem] d dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] rounded-[0.45rem] px-5 text-sm mt-2"
                                            placeholder="Enter Confirm Password" required />
                                        <a href="/profile/change-password"
                                            className="text-[#C6FF00] text-sm float-right mt-1">Change Password</a>
                                    </div> */}
                                    <div className="col-span-6 mt-6 text-right">
                                        <button
                                            className="text-sm text-black h-[2.5rem] leading-[2.5rem] px-5 bg-[#C6FF00] rounded-full inline-block max-w-[8.06rem] w-full text-center transition-all duration-300 mt-6 cursor-pointer">{isSubmitting ? <Loader /> : "Save"}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default EditProfile;