import React, { useState } from "react";
import { Input, Button, Checkbox, Select, notification } from "antd";

// helpers
import { postLogin } from "../../api/auth";

// assets
import "../../assets/styles/containers/auth-form.scss";
import "../../assets/styles/elements/button.scss";


function AuthFormAntd() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRememberMy, setIsRememberMy] = useState(false);
  const [userRole, setUserRole] = useState("user");
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    postLogin({
      username: email,
      password: password,
    })
      .then(() => notification.success({ description: `User ${email} is login successfully` }))
      .catch(e => notification.error({ message: "Oooops", description: e.response.data }))
      .finally(() => setIsLoading(false));
  }

  const handleSelectRole = e => {
    setUserRole(e);

    if (e === "admin") {
      setIsRememberMy(true);
    };
  }

  const handleChangeRememberMy = e => {
    setIsRememberMy(e.target.checked);

    if (!e.target.checked && userRole === "admin") {
      setUserRole("user");
    }
  }


  return (
    <form
      className="lsn-auth-form"
      onSubmit={handleSubmit}
    >
      <Input
        label={"User name*"}
        placeholder={"Enter your user name"}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input.Password
        label={"Password*"}
        placeholder={"Enter your password"}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Checkbox
        checked={isRememberMy}
        onChange={handleChangeRememberMy}
      >
        Remember me
      </Checkbox>
      <Select
        value={userRole}
        onChange={handleSelectRole}
        options={[
          { value: "admin", label: "Admin", },
          { value: "user", label: "User", },
          { value: "content-maker", label: "Content maker", },
        ]}
      />
      <Button loading={isLoading} className="lsn-button" type="primary" htmlType="submit">Login</Button>
    </form>
  );
}

export default AuthFormAntd;
