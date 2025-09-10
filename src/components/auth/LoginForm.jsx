"use client"
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import { loginValidationSchema } from "@/utils/formValidation";
import ErrorText from "../ui/ErrorText";
import { useMutation } from "@tanstack/react-query";
import queryConstants from "@/constants/query-constants";
import { login } from '@/services/api/user-ep'
import toast from "react-hot-toast";
import Loader from "../ui/Loader";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();
    const { saveSession } = useAuth();
    const { mutateAsync: loginMutate } = useMutation({
        mutationKey: [queryConstants.login],
        mutationFn: login,
    })

    const formik = useFormik({
        initialValues: {
            loginId: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                const data = await loginMutate(values);
                toast.success('Login successful!');
                resetForm();
                console.log("Data======>", data);
                saveSession(data.user);
                if (data?.user?.is_artist) {
                    if (data?.user?.categories && data?.user?.categories.length) {
                        router.push("/artists/dashboard");
                    } else {
                        router.push("/discover-your-genre");
                    }
                } else {
                    if (data?.user?.categories && data?.user?.categories.length) {
                        router.push("/");
                    } else {
                        router.push("/discover-your-genre");
                    }
                }
            } catch (err) {
                toast.error(err?.message || 'Login failed');
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <section className="login">
            <div className="flex flex-col md:flex-row ">
                <div className="w-[50%] h-screen">
                    <Image
                        height={700}
                        width={400}
                        src="/images/login/login.webp"
                        alt=""
                        className="h-full 2xl:h-screen w-full object-cover"
                        quality={50}
                    />
                </div>
                <div className="w-[50%] bg-[#191919] relative bg-[url('/images/login/wave.webp')] bg-no-repeat bg-top-right flex justify-center items-center p-4 relative">
                    <div className="max-w-[27.38rem] w-full m-auto">
                        <center>
                            <h1 className="font-semibold text-[2.25rem]">
                                Sign In To Continue
                            </h1>
                            <p className="text-base text-[#A3A3A3] mb-8">
                                Access Your Account in Just a Few Clicks
                            </p>
                        </center>

                        <form onSubmit={formik.handleSubmit}>
                            {/* Username */}
                            <div className="mb-5 relative">
                                <label
                                    htmlFor="loginId"
                                    className="text-base font-medium text-[#D1CAD5] mb-2 block"
                                >
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    id="loginId"
                                    name="loginId"
                                    className="w-full rounded-md px-3 h-[3rem] text-sm border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                    placeholder="Enter Email or Number"
                                    value={formik.values.loginId}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.loginId && formik.errors.loginId ? (
                                    <ErrorText errorMessage={formik.errors.loginId} />
                                ) : null}
                            </div>

                            {/* Password */}
                            <div className="mb-5 relative">
                                <label
                                    htmlFor="password"
                                    className="text-base font-medium text-[#D1CAD5] mb-2 block"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full rounded-md px-3 h-[3rem] text-sm border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                    placeholder="Enter Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <span className="absolute right-[1rem] top-[2.7rem] text-[#9D9D9D]">
                                    <i className="bi bi-eye"></i>
                                </span>
                                {formik.touched.password && formik.errors.password ? (
                                    <ErrorText errorMessage={formik.errors.password} />
                                ) : null}

                                <small className="block text-right mt-3">
                                    <a
                                        href="#"
                                        className="text-[#4D41FA] underline text-xs"
                                    >
                                        Forgot Password?
                                    </a>
                                </small>
                            </div>

                            {/* Submit Button */}
                            <div className="mb-5 relative">
                                <button
                                    type="submit"
                                    className="bg-[#C6FF00] w-full text-sm text-black h-[3rem] leading-[3rem] text-center rounded-4xl cursor-pointer hover:bg-[#afe200] transition-colors"
                                >
                                    {formik.isSubmitting ? <Loader size="sm" /> : "Submit"}
                                </button>
                            </div>
                        </form>

                        <center>
                            <h6 className="mt-6 mb-6 text-sm font-semibold">
                                {"Don't have an account?"}{" "}
                                <Link
                                    href="/user-signup"
                                    className="text-[#4D41FA] underline"
                                >
                                    Sign Up
                                </Link>
                            </h6>
                            <p className="text-sm text-[#B5B5B5]">OR</p>
                            <Link
                                href="#"
                                className="border border-[rgba(255,255,255,0.15)] w-full text-sm text-[#9D9D9D] h-[3.5rem] leading-[3.5rem] text-center rounded-4xl cursor-pointer hover:bg-white transition-colors flex justify-center items-center mt-7"
                            >
                                <span>
                                    <Image
                                        height={20}
                                        width={20}
                                        src="/images/login/google.webp"
                                        alt="google-login"
                                        loading="lazy"
                                        className="mr-3"
                                    />
                                </span>
                                Log in to continue
                            </Link>
                        </center>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
