import { Formik, Form, Field, FieldArray } from 'formik';
import useUserProfileForm from "@/app/(others)/(common)/profile/_hook/useUserProfileForm";
import FileUploader from "@/components/file-uploader";
import { useState } from 'react';
const ProfileUpdateForm = () => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
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

    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleAddBioSection = () => {
        if (newTitle.trim() || newDescription.trim()) {
            const updatedBio = [...values.bio, { title: newTitle, description: newDescription }];
            setFieldValue('bio', updatedBio);
            setNewTitle('');
            setNewDescription('');
        }
    };

    const handleDeleteBio = (index) => {
        const updatedBio = values.bio.filter((_, i) => i !== index);
        setFieldValue('bio', updatedBio);
    };
    return (
        <>
            <FileUploader
                isOpen={isOpenAvatarUpload}
                onClose={handleCloseAvatarUpload}
                onSuccess={handleAvatarUpload}
                accept={{ 'image/*': ['.jpg', '.jpeg', '.png'] }} />
            <form action="" className="col-span-12 md:col-span-8 md:col-start-3" onSubmit={handleSubmit}>
                <span
                    className="w-[11.563rem] flex-[0_0_11.563rem] rounded-full border border-[#d3d3d3a1] border-solid block mb-6 mx-auto relative">
                    <img src={values?.avatar || "/img/artist-dashboard/artist.png"} alt="artist"
                        className="w-[11.563rem] h-[11.563rem] rounded-full object-cover block p-4 relative" />

                    <button type='button'
                        className="absolute h-[2.88rem] w-[2.88rem] bg-[#4D41FA] bottom-0 right-0 justify-center items-center rounded-full grid" onClick={handleOpenAvatarUpload}>
                        <img src="/img/artist-dashboard/edit.svg" alt="" /></button>
                </span>

                <div class="grid grid-cols-12 gap-4">
                    <div className="col-span-12 mt-6">
                        <label className="text-base text-[#D1CAD5]">Name</label>
                        <input
                            type="text"
                            className={`w-full h-[2.5rem] rounded-[1rem] px-5 text-sm mt-2 bg-[#2E2E2E] dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] 
      border ${touched.name && errors.name ? 'border-red-500' : 'border-[#404040]'}`}
                            placeholder="Add name"
                            name="name"
                            value={values.name}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            onBlur={handleBlur}
                            required
                        />
                        {touched.name && errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                    </div>
                    <div className="col-span-12">
                        <label class="text-base text-[#D1CAD5]">Biography</label>
                    </div>
                    {/* <div className="col-span-12 w-full">
                        <div className="grid grid-cols-12 w-full gap-4">
                            <div className="col-span-11">
                                <label className="text-base text-[#D1CAD5]">Title</label>
                                <input
                                    type="text"
                                    className={`w-full h-[2.5rem] rounded-[1rem] px-5 text-sm mt-2 bg-[#2E2E2E] dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] 
      border border-[#404040]'}`}
                                />
                            </div>
                            <div className="col-span-1">
                                <button
                                    type="button"
                                    className="w-auto h-[2.88rem] leading-[2.88rem] bg-[#C6FF00] text-center rounded-xl px-5 text-black text-sm cursor-pointer"
                                >
                                    <i class="bi bi-plus-circle"></i>
                                </button>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="text-base text-[#D1CAD5]">Description</label>
                            <textarea
                                rows={4}
                                className="bg-[#2E2E2E] border border-[#404040] w-full dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] rounded-[1rem] px-5 text-sm mt-2 resize-none" />
                        </div>
                    </div> */}
                    {values.bio.map((section, index) => (
                        <div key={index} className="col-span-12 w-full mb-4 border-t border-[#404040] pt-4">
                            <div className="grid grid-cols-12 w-full gap-4">
                                <div className="col-span-12">
                                    <label className="text-base text-[#D1CAD5]">Title</label>
                                    <input
                                        type="text"
                                        value={section.title}
                                        className="w-full h-[2.5rem] rounded-[1rem] px-5 text-sm mt-2 bg-[#2E2E2E] dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] border border-[#404040]"
                                        placeholder="Enter title"
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <label className="text-base text-[#D1CAD5]">Description</label>
                                <textarea
                                    rows={4}
                                    value={section.description}
                                    className="bg-[#2E2E2E] border border-[#404040] w-full dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] rounded-[1rem] px-5 text-sm mt-2 resize-none"
                                    placeholder="Enter description"
                                    readOnly
                                />
                            </div>
                            <div className='w-full text-right'>
                                <button
                                    type="button"
                                    onClick={() => handleDeleteBio(index)}
                                    className="w-auto h-[2.88rem] leading-[2.88rem] bg-red-600 text-center rounded-xl px-4 text-white text-sm cursor-pointer"
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="col-span-12 w-full mb-4">
                        <div className="grid grid-cols-12 w-full gap-4">
                            <div className="col-span-12">
                                <label className="text-base text-[#D1CAD5]">Title</label>
                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="w-full h-[2.5rem] rounded-[1rem] px-5 text-sm mt-2 bg-[#2E2E2E] dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] border border-[#404040]"
                                    placeholder="Enter title"
                                />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <label className="text-base text-[#D1CAD5]">Description</label>
                            <textarea
                                rows={4}
                                value={newDescription}
                                onChange={(e) => setNewDescription(e.target.value)}
                                className="bg-[#2E2E2E] border border-[#404040] w-full dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] rounded-[1rem] px-5 text-sm mt-2 resize-none"
                                placeholder="Enter description"
                            />
                        </div>
                        <div className='w-full text-right'>
                            <button
                                type="button"
                                onClick={handleAddBioSection}
                                className="w-auto h-[2.88rem] leading-[2.88rem] bg-[#C6FF00] text-center rounded-xl px-5 text-black text-sm cursor-pointer"
                            >
                                <i className="bi bi-plus-circle"></i> ADD BIO
                            </button>
                        </div>
                    </div>


                    <div className="col-span-12 mt-6 text-center">
                        <button
                            className="text-sm text-black h-[2.5rem] leading-[2.5rem] px-5 bg-[#C6FF00] rounded-full inline-block max-w-[12.06rem] w-full text-center transition-all duration-300 mt-6 cursor-pointer" type='submit'>
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </>

    )
}

export default ProfileUpdateForm;