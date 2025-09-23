"use client"

import SignupToggle from "./SignupToggle";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/services/api/user-ep";
import ErrorText from "../ui/ErrorText";
import { useFormik } from "formik";
import Link from "next/link";
import Loader from "../ui/Loader";
import { useRouter } from "next/navigation";
import queryConstants from "@/constants/query-constants";
import { signupValidationSchema } from "@/utils/formValidation";
import toast from "react-hot-toast";
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ArtistSignupForm = () => {
    const router = useRouter();
    const { mutateAsync } = useMutation({
        mutationKey: [queryConstants.signup],
        mutationFn: signup,
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: signupValidationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            const { confirmPassword, ...payload } = values;
            try {
                await mutateAsync({ ...payload, is_artist: true });
                toast.success('Verify email to complete signup!');
                sessionStorage.setItem("email", payload.email);
                router.push("/verify-email");
                resetForm();
            } catch (err) {
                toast.error(err?.message);
            } finally {
                setSubmitting(false);
            }
        },
    });
    return (
        <section className="login">
            <div className="flex justify-center bg-[url('/img/login-bg.png')] bg-cover bg-bottom bg-no-repeat w-full min-h-screen">
                <div
                    className="relative w-[45%] bg-[#191919] bg-no-repeat bg-center flex justify-center items-center p-4 bg-cover ">
                    <SignupToggle />

                    <div className="max-w-[27.38rem] w-full m-auto">
                        <center>
                            <h1 className="font-semibold text-[2.25rem] mb-2">Let’s Get Started</h1>
                        </center>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-4 relative">
                                <label className="text-base font-medium text-[#D1CAD5] mb-2 block">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className="w-full rounded-md px-3 h-[3rem] text-sm border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                    placeholder="Enter Email or Number"
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <ErrorText errorMessage={formik.errors.email} />
                                )}
                            </div>

                            <div className="mb-4 relative">
                                <label className="text-base font-medium text-[#D1CAD5] mb-2 block">
                                    Phone
                                </label>
                                {/* <input
                                    type="text"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                    className="w-full rounded-md px-3 h-[3rem] text-sm border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                    placeholder="Enter Number"
                                /> */}
                                <ReactPhoneInput
                                    country={'us'} // default country
                                    value={formik.values.phone}
                                    onChange={(phone) => formik.setFieldValue('phone', phone)}
                                    onBlur={() => formik.setFieldTouched('phone', true)}
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                        className: 'w-full rounded-md pl-12 h-[3rem] text-sm border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E] text-white'
                                    }}
                                    containerClass="w-full"
                                    inputClass="!bg-[#2E2E2E] !border !border-[rgba(255,255,255,0.15)] !text-white"
                                    dropdownStyle={{ backgroundColor: "#2E2E2E" }}
                                    buttonClass="!bg-[#2E2E2E]"
                                    placeholder="Enter Number"
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <ErrorText errorMessage={formik.errors.phone} />
                                )}
                                {formik.touched.phone && formik.errors.phone && (
                                    <ErrorText errorMessage={formik.errors.phone} />
                                )}
                            </div>

                            <div className="mb-4 relative">
                                <label className="text-base font-medium text-[#D1CAD5] mb-2 block">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    className="w-full rounded-md px-3 h-[3rem] text-sm border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                    placeholder="Enter Password"
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <ErrorText errorMessage={formik.errors.password} />
                                )}
                            </div>

                            <div className="mb-4 relative">
                                <label className="text-base font-medium text-[#D1CAD5] mb-2 block">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                    className="w-full rounded-md px-3 h-[3rem] text-sm border border-[rgba(255,255,255,0.15)] bg-[#2E2E2E]"
                                    placeholder="Enter Password"
                                />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                    <ErrorText errorMessage={formik.errors.confirmPassword} />
                                )}
                            </div>

                            <div className="mt-6 relative">
                                <button
                                    disabled={formik.isSubmitting}
                                    type="submit"
                                    className="bg-[#C6FF00] w-full text-sm text-black h-[3rem] leading-[3rem] text-center rounded-4xl cursor-pointer hover:bg-[#afe200] transition-colors"
                                >
                                    {formik.isSubmitting ? <Loader size="sm" /> : "Submit"}
                                </button>
                            </div>
                        </form>
                        <center>
                            <h6 className="mt-2 mb-2 text-sm font-semibold">Already have an account? <Link href="/login"
                                className="text-[#4D41FA] underline">Sign
                                In</Link></h6>
                            <p className="text-sm text-[#B5B5B5]">OR</p>
                            <a href="#"
                                className="border-1 mt-2 border-[rgba(255,255,255,0.15)] w-full text-sm text-[#9D9D9D] h-[3.5rem] leading-[3.5rem] text-center rounded-4xl cursor-pointer hover:bg-white transition-colors flex justify-center items-center"><span><img
                                    src="/images/login/google.webp" alt="pr3cio-logo" loading="lazy"
                                    className="mr-3" /></span> Log in to continue</a>
                        </center>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default ArtistSignupForm;