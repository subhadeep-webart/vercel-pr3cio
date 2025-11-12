"use client"

import { useMutation, useQuery } from "@tanstack/react-query";
import queryConstants from "@/constants/query-constants";
import { getAllGenreCategory, postCategory } from "@/services/api/user-api";
import GenreTag from "./_components/GenreTag";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "@/components/ui/Loader";
import useAuth from "@/hooks/useAuth";
import { useAppDispatch } from "@/redux/store";
import { getUserProfile } from "@/services/api/user-ep";
const DiscoverYourGenre = () => {
    const router = useRouter();
    const { user, saveSession } = useAuth();
    console.log("User=====>", user);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const { data: allGenres, isLoading } = useQuery({
        queryKey: [queryConstants.getAllGenres],
        queryFn: getAllGenreCategory,
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });

    const {
        mutate: submitCategory,
        isLoading: isCategorySubmitting,
        isError,
        isSuccess,
        error,
        reset
    } = useMutation({
        mutationFn: postCategory,
        onSuccess: async (data) => {
            console.log('Category added:', data);
            toast.success(data?.message);

            try {
                const profile = await getUserProfile();
                saveSession(profile.userWithDetails);
                if (profile.userWithDetails?.is_artist) {
                    await router.push("/artists/dashboard");
                } else {
                    await router.push("/");
                }
                // Redirect only after success
                // await router.push("/artists/dashboard");
            } catch (err) {
                console.error("Error while refreshing user profile:", err);
                toast.error('Unable to refresh user session');

                // ❌ No redirect here!
            }
        },
        onError: (error) => {
            console.error('Error:', error.message);
            toast.error(error.message);
        },
    });

    const handleGenreSelect = (genreId) => {
        setSelectedGenres((prev) =>
            prev.includes(genreId)
                ? prev.filter((id) => id !== genreId)
                : [...prev, genreId]
        );
    };

    console.log("Selected Genre======>", selectedGenres);

    const handleSelectedGenreSubmit = async () => {
        if (selectedGenres.length < 5) {
            toast.error(`Please pick at least 5 genres to continue. 🌟 We want your category to feel complete!`);
            return;
        }
        await submitCategory({ "categories": [...selectedGenres] });
    }


    if (isLoading) {
        return null;
    }

    const { categoryList = [] } = allGenres;

    return (
        <>
            <section className="login">
                <div className="flex flex-col md:flex-row ">
                    <div className="w-[50%] h-screen">
                        <img
                            src="/images/login/tags.webp"
                            alt=""
                            className="h-screen 2xl:h-screen w-full object-cover"
                        />
                    </div>
                    <div className="w-[50%] bg-[#191919] relative bg-[url('/images/login/wave.webp')] bg-no-repeat bg-top-right flex justify-center items-center p-4 h-screen">
                        <div className="max-w-[38.38rem] w-full m-auto relative">
                            <center>
                                <div className="flex justify-center items-center">
                                    <img
                                        src="/images/login/1.webp"
                                        alt=""
                                        className="h-24 w-24 object-cover"
                                    />
                                </div>
                                <div className="pt-4 text-right absolute top-4 right-0">
                                    <button
                                        className="bg-[#C6FF00] w-32 text-sm text-black h-[3rem] leading-[3rem] text-center rounded-3xl cursor-pointer hover:bg-[#afe200] transition-colors"
                                        disabled={isCategorySubmitting}
                                        onClick={handleSelectedGenreSubmit}
                                    >
                                        {isCategorySubmitting ? <Loader /> : "Continue"}
                                    </button>
                                </div>
                                <h1 className="font-semibold text-2xl mt-4 mb-2">
                                    {"Let Pr3cio handpick music that you'll put on repeat and discover artists you'll love"}
                                </h1>
                                <p className="text-base text-[#A3A3A3] mb-6">
                                    Choose min 5 tags for personalized recommendations
                                </p>
                                <div className=" text-center flex justify-center flex-wrap">
                                    {
                                        categoryList?.length ? categoryList.map((category) => (
                                            <GenreTag genreDetails={category} key={category._id} handleGenreSelect={handleGenreSelect} />
                                        )) : null
                                    }
                                </div>

                            </center>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DiscoverYourGenre;