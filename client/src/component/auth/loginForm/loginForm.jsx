import authApi from "api/authApi";
import userImg from "assets/images/user.jpg";
import { Button } from "globalCss";
import useForm from "hooks/useForm";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, StyledContainer, Wrapper } from "./loginForm.element";

const LoginForm = () => {
  const { values, handleOnChange, handleSubmit, err } = useForm(authApi.login);

  const isLogged = useSelector((state) => state.auth.isLogged);
  if (isLogged) return <Redirect to="/" />;
  return (
    <StyledContainer>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <img
            style={{ borderRadius: "50%" }}
            src={userImg}
            width="100"
            height="100"
            alt="user"
          />
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
        </Form>
      </Wrapper>
    </StyledContainer>
  );
};

export default LoginForm;
