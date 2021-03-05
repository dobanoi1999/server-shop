import useForm from "hooks/useForm";
import React from "react";
import authApi from "../../../api/authApi";
import { Form, StyledContainer, Wrapper } from "../loginForm/loginForm.element";

const Register = () => {
  const { values, handleSubmit, handleOnChange, err } = useForm(
    authApi.register
  );
  return (
    <StyledContainer>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <h2 style={{ color: "red" }}>REGISTER</h2>
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
          <button type="submit">submit</button>
        </Form>
      </Wrapper>
    </StyledContainer>
  );
};

export default Register;
