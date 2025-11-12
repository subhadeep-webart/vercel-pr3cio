import { useState } from 'react';
import useUserProfileForm from "@/app/(others)/(common)/profile/_hook/useUserProfileForm";
import FileUploader from "@/components/file-uploader";
import toast from 'react-hot-toast';

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
        if (newTitle.trim() && newDescription.trim()) {
            const updatedBio = [...values.bio, {
                title: newTitle.trim(),
                description: newDescription.trim()
            }];
            setFieldValue('bio', updatedBio);
            setNewTitle('');
            setNewDescription('');
        } else {
            // Optionally show error message or visual cue
            toast.error('Both Title and Description are required to add a bio.');
        }
    };


    const handleDeleteBio = (index) => {
        const updatedBio = values.bio.filter((_, i) => i !== index);
        setFieldValue('bio', updatedBio);
    };

    const handleCustomSubmit = (e) => {
        e.preventDefault();

        const hasPartialBio = newTitle.trim() || newDescription.trim();
        const hasBothFields = newTitle.trim() && newDescription.trim();

        if (hasPartialBio && !hasBothFields) {
            toast.error('Please fill in both Title and Description before saving.');
            return;
        }

        if (hasBothFields) {
            const updatedBio = [...values.bio, {
                title: newTitle.trim(),
                description: newDescription.trim()
            }];
            setFieldValue('bio', updatedBio);
            setNewTitle('');
            setNewDescription('');
            setTimeout(() => handleSubmit(e), 0);
        } else {
            handleSubmit(e);
        }
    };


    return (
        <>
            <FileUploader
                isOpen={isOpenAvatarUpload}
                onClose={handleCloseAvatarUpload}
                onSuccess={handleAvatarUpload}
                accept={{ 'image/*': ['.jpg', '.jpeg', '.png'] }}
            />

            <form className="col-span-12 md:col-span-8 md:col-start-3 " onSubmit={handleCustomSubmit}>
                <span className="w-[8.563rem] md:w-[11.563rem] flex-[0_0_11.563rem] rounded-full border border-[#d3d3d3a1] border-solid block mb-6 mx-auto relative">
                    <img
                        src={values?.avatar || "/img/artist-dashboard/artist.png"}
                        alt="artist"
                        className="w-[8.563rem] h-[8.563rem] md:w-[11.563rem] md:h-[11.563rem] rounded-full object-cover block p-4 relative"
                    />
                    <button
                        type='button'
                        className="absolute h-[1.88rem] w-[1.88rem] md:h-[2.88rem] md:w-[2.88rem] bg-[#4D41FA] bottom-1 md:bottom-0 right-0 justify-center items-center rounded-full grid"
                        onClick={handleOpenAvatarUpload}
                    >
                        <img src="/img/artist-dashboard/edit.svg" alt="" />
                    </button>
                </span>

                <div className="grid grid-cols-12 gap-4 px-5 md:px-0">
                    <div className="col-span-12 mt-6">
                        <label className="text-sm md:text-base text-[#D1CAD5]">Name</label>
                        <input
                            type="text"
                            className={`w-full h-[2.5rem] rounded-[1rem] px-5 text-sm mt-2 bg-[#2E2E2E] dark:placeholder-[#9D9D9D] dark:text-[#9D9D9D] 
                                border ${touched.name && errors.name ? 'border-red-500' : 'border-[#404040]'}`}
                            placeholder="Add name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {touched.name && errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div className="col-span-12">
                        <label className="text-sm md:text-base text-[#D1CAD5]">Biography</label>
                    </div>

                    {values.bio.map((section, index) => (
                        <div key={index} className="col-span-12 w-full mb-4 border-t border-[#404040] pt-4">
                            <div className="grid grid-cols-12 w-full gap-4">
                                <div className="col-span-12">
                                    <label className="text-sm md:text-base text-[#D1CAD5]">Title</label>
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
                                <label className="text-sm md:text-base text-[#D1CAD5]">Description</label>
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
                                    className="w-auto h-[1.88rem] leading-[1.88rem] md:h-[2.88rem] md:leading-[2.88rem] bg-red-600 text-center rounded-xl px-4 text-white text-sm cursor-pointer"
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="col-span-12 w-full mb-4">
                        <div className="grid grid-cols-12 w-full gap-4">
                            <div className="col-span-12">
                                <label className="text-sm md:text-base text-[#D1CAD5]">Title</label>
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
                            <label className="text-sm md:text-base text-[#D1CAD5]">Description</label>
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
                                disabled={!newTitle.trim() || !newDescription.trim()}
                                className={`w-auto h-[1.88rem] leading-[1.88rem] md:h-[2.88rem] md:leading-[2.88rem] ${(!newTitle.trim() || !newDescription.trim())
                                    ? 'bg-gray-500 cursor-not-allowed'
                                    : 'bg-[#C6FF00] cursor-pointer'
                                    } text-center rounded-xl px-5 text-black text-sm`}
                            >
                                <i className="bi bi-plus-circle"></i> ADD BIO
                            </button>
                        </div>
                    </div>

                    <div className="col-span-12 md:mt-6 text-center">
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className="text-sm text-black h-[2.5rem] leading-[2.5rem] px-5 bg-[#C6FF00] rounded-full inline-block max-w-[12.06rem] w-full text-center transition-all duration-300 mt-6 cursor-pointer"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ProfileUpdateForm;
