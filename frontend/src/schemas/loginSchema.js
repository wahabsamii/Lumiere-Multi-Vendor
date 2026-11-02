import * as yup from "yup";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

const errorMessage = "Use lowercase, uppercase, and digits (8–25 characters)";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .max(30, "Email cannot exceed 30 characters")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password cannot exceed 25 characters")
    .matches(passwordPattern, {
      message: errorMessage,
    })
    .required("Password is required"),
});

export default loginSchema;