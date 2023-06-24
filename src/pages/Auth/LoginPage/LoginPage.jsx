import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom"; 
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// helper
import login from "../../../api/auth";

// assets
import "../../../assets/styles/pages/login-page.scss";


const DEFAULT_VALUES = {
  username: "",
  password: ""
};

const schema = yup.object().shape({
  username: yup.string().nullable().required("Field is required"),
  password: yup.string().nullable().required("Field is required"),
});

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { watch, setValue, formState: { errors }, handleSubmit } = useForm({
    defaultValues: DEFAULT_VALUES,
    shouldUnregister: false,
    resolver: yupResolver(schema),
  });

  const { username, password } = watch();

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      const resp = await login.post(data);
      localStorage.setItem("token", resp.token);
      dispatch({ type: "AFTER_USER_LOGIN" });
      
      navigate("/profile");
    } catch (error) {
      message.error(error.response.data);
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <div className="mdst-login-page" onSubmit={handleSubmit(onSubmit)}>
      <form className="mdst-login-page__form">
        <Input
          placeholder="username"
          name="username"
          value={username}
          status={errors.username?.message && "error"}
          onChange={e => setValue("username", e.target.value)}
        />
        { errors.email?.message && <span>{ errors.username?.message }</span> }
        <Input.Password
          placeholder="Password"
          name="password"
          value={password}
          status={errors.password?.message && "error"}
          onChange={e => setValue("password", e.target.value)}
        />
        { errors.password?.message && <span>{ errors.password?.message }</span> }
        <Button loading={isLoading} htmlType="submit">Log In</Button>
      </form>
    </div>
  )
};

export default LoginPage;
