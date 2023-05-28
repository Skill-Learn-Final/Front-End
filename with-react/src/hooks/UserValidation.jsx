import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password should be at least 4 characters.")
    .max(16, "Password should be at most 16 characters."),
  cPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords Don't Match")
    .required("You should confirm your password."),
  // dob: yup.date("Date is required").min(new Date(Date.now()), "Date must be greater than today").required("DOB is required").nullable("Date is required").default(undefined)
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password should be at least 4 characters.")
    .max(16, "Password should be at most 16 characters."),
});

export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password should be at least 4 characters.")
    .max(16, "Password should be at most 16 characters."),
  newPassword: yup
    .string()
    .required("New Password is required")
    .min(4, "Password should be at least 4 characters.")
    .max(16, "Password should be at most 16 characters."),
  cNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords Don't Match")
    .required("You should confirm your new password."),
});
