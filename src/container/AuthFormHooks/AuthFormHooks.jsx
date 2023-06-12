import React from "react";
import { useFormik } from "formik";
import { Input, Button, Select } from "antd";
import * as Yup from "yup";


const validationSchema = Yup.object({
  password: Yup.string().required("No password provided.") 
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  email: Yup.string().email("Invalid email address").required("Required"),
  name: Yup.string().min(3, "Name is to short").required("Required"),
});

const AuthFormHooks = () => {
  const { handleSubmit, handleChange, setFieldValue, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      friend: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        onChange={handleChange}
        value={values.name}
      />
      <Select
        name="friend"
        onChange={e => setFieldValue("friend", e)}
        options={[
          {
            value: "jack",
            label: "Jack",
          },
          {
            value: "lucy",
            label: "Lucy",
          },
          {
            value: "tom",
            label: "Tom",
          },
        ]}
      />
      { errors.name }
      <Input
        name="email"
        type="email"
        onChange={handleChange}
        value={values.email}
      />
      { errors.email }
      <Input.Password
        name="password"
        onChange={handleChange}
        value={values.password}
      />
      { errors.password }
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default AuthFormHooks;
