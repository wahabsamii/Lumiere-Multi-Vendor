import * as yup from "yup";

const signupSchema = yup.object().shape({
  name: yup.string().max(30).required("name is required"),
});

export default signupSchema;
