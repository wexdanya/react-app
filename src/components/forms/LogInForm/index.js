import React from "react";
import styles from "./LogIn.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SHEMA = Yup.object({
  email: Yup.string().trim().min(1).max(25).required("Cant be empty"),
  password: Yup.string()
    .min(5, "Minimum 5 symbols")
    .max(15)
    .required("Cant be empty"),
    gender: Yup.string().oneOf(['male','female']).required("Chose gender"),
});

const initialValues = {
  email: "",
  password: "",
  gender: null,
};

const LogInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    console.log("values", values);
    console.log("formikBag", formikBag);
    formikBag.resetForm();
  };
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SHEMA}
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <h2>Log in</h2>
            <label>
              Email
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </label>
            <label>
              Password
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={styles.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </label>
            Select gender
            <label>
              Male
              <Field type="radio" name="gender" value="male" />
            </label>
            <label>
              Female
              <Field type="radio" name="gender" value="female" />
            </label>
            <ErrorMessage
                name="gender"
                component="div"
              />
            <input type="submit" value="Send" className={styles.button} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;
