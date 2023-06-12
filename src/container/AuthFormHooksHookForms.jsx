import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "antd";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const validationSchema = Yup.object({
  password: Yup.string().required("No password provided.") 
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  email: Yup.string().email("Invalid email address").required("Required"),
  name: Yup.string().min(3, "Name is to short").required("Required"),
});

const AuthFormHooksHookForms = () => {
  const { handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const { email, password, name } = watch();

  const onSubmit = (data) => {
    console.log(data);
  }

  const onError = (data) => {
    console.log("Error!!!!", data);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Input
        name="name"
        onChange={e => setValue("name", e.target.value)}
        value={name}
      />
      { errors.name?.message }
      <Input
        name="email"
        type="email"
        onChange={e => setValue("email", e.target.value)}
        value={email}
      />
      { errors.email?.message }
      <Input.Password
        name="password"
        onChange={e => setValue("password", e.target.value)}
        value={password}
      />
      { errors.password?.message }
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default AuthFormHooksHookForms;
