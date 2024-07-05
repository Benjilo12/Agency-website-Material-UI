import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";

//SVG ICONS AND IMAGES

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import style from "./style";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  fullName: yup.string().required("Name is required"),
  message: yup.string().min(20, "Too short!"),
});

function FormComponent() {
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={style.input}>
        <TextField
          placeholder="Full name"
          sx={style.textField}
          id="fullName"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={
            formik.touched.fullName && formik.errors.fullName
              ? formik.touched.fullName && formik.errors.fullName
              : ""
          }
          inputProps={{ style: { fontSize: "16px" } }}
        />
        <TextField
          placeholder="Email address"
          sx={style.textField}
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.touched.email && formik.errors.email
              : ""
          }
          inputProps={{ style: { fontSize: "16px" } }}
        />
      </Box>
      <TextareaAutosize
        minRows={6}
        id="message"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
        placeholder="write message"
        style={style.textareaAutosize}
      />
      <Button type={"submit"} variant="contained" color="primary">
        send us message <ArrowForwardIosIcon />
      </Button>
    </form>
  );
}

export default FormComponent;
