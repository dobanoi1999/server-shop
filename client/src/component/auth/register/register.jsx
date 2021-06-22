import { Button } from "globalCss";
import useForm from "hooks/useForm";
import React from "react";
import userImg from "assets/images/user.jpg";
import authApi from "../../../api/authApi";
import { Form, StyledContainer, Wrapper } from "../loginForm/loginForm.element";
import { useDispatch } from "react-redux";
import { setModalView } from "redux/action/modal";

const Register = () => {
  const dispatch = useDispatch();
  const { values, handleSubmit, handleOnChange, err } = useForm(
    authApi.register
  );
  return (
    <Form onSubmit={handleSubmit}>
      <img
        style={{ borderRadius: "50%" }}
        src={userImg}
        width="100"
        height="100"
        alt="user"
      />
      <h3>REGISTER</h3>
      <input
        onChange={handleOnChange}
        name="email"
        value={values.email}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={handleOnChange}
        name="username"
        value={values.username}
        type="text"
        placeholder="User Name"
      />
      <input
        onChange={handleOnChange}
        name="password"
        value={values.password}
        type="password"
        placeholder="Password"
      />
      {err ? err : ""}
      <Button bgColor="primary" block type="submit">
        submit
      </Button>
      <p>
        You already have an account{" "}
        <span onClick={() => dispatch(setModalView("LOGIN_FORM"))}>Login</span>
      </p>
    </Form>
  );
};

export default Register;
