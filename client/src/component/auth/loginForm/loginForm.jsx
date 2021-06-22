import authApi from "api/authApi";
import userImg from "assets/images/user.jpg";
import { Button } from "globalCss";
import useForm from "hooks/useForm";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { setModalView } from "redux/action/modal";
import { Form } from "./loginForm.element";

const LoginForm = () => {
  const { values, handleOnChange, handleSubmit, err } = useForm(authApi.login);
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);
  if (isLogged) return <Redirect to="/" />;
  return (
    <Form onSubmit={handleSubmit}>
      <img
        style={{ borderRadius: "50%" }}
        src={userImg}
        width="100"
        height="100"
        alt="user"
      />
      <h3>Login with email & password </h3>
      <input
        type="email"
        name="email"
        value={values.email}
        placeholder="Email "
        required
        onChange={handleOnChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        placeholder="PassWord "
        required
        onChange={handleOnChange}
      />
      {err ? err : ""}
      <Button bgColor="primary" block type="submit">
        Submit
      </Button>
      <p>
        Don't have account ?{" "}
        <span onClick={() => dispatch(setModalView("REGISTER_FORM"))}>
          Register
        </span>
      </p>
    </Form>
  );
};

export default LoginForm;
