import * as Yup from "yup"

export const loginValidationSchema = Yup.object({
    loginId: Yup.string()
        .required("Username is required")
        .min(3, "Username must be at least 3 characters"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
})

export const forgotPasswordValidationSchema = Yup.object({
    userId: Yup.string()
        .required("Username is required")
})

export const changePasswordValidationSchema = Yup.object({
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
})

export const signupValidationSchema = Yup.object({
    email: Yup.string().label("Email").required("Email is required"),
    phone: Yup.string().label("Phone").required("Phone is required"),
    password: Yup.string().label("Password").required("Password is required"),
    confirmPassword: Yup
        .string()
        .label("Confirm Password")
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const otpValidationSchema = Yup.object().shape({
    otp: Yup.string().label('Otp').required(),
});