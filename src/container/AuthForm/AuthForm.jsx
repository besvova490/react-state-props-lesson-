import React, { useState } from "react";

// elements
import Input from "../../elements/Input";
import Button from "../../elements/Button";

// assets
import "../../assets/styles/containers/auth-form.scss";


function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRememberMy, setIsRememberMy] = useState(false);
  const [userRole, setUserRole] = useState("user");


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password, isRememberMy, userRole });

    setEmail("");
    setPassword("");
  }

  const handleSelectRole = e => {
    setUserRole(e.target.value);

    if (e.target.value === "admin") {
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
        label={"Email*"}
        placeholder={"Enter your email"}
        type={"email"}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        label={"Password*"}
        placeholder={"Enter your password"}
        type={"password"}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor="">
        <input
          type="checkbox"
          checked={isRememberMy}
          onChange={handleChangeRememberMy}
        />
        {" "}remember me
      </label>
      <select
        value={userRole}
        onChange={handleSelectRole}
      >
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="content-maker">Content maker</option>
      </select>
      <Button htmlType="submit">Login</Button>
    </form>
  );
}

export default AuthForm;
