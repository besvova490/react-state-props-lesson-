import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const AuthForm = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ name: "jared", email: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("oops field is required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
            name="email"
          />
          {props.errors.email && <div id="feedback">{props.errors.email}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

export default AuthForm;
