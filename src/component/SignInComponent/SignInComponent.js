import React from "react";
import { useFormik } from "formik";
import {
  BannerImage,
  ErrorMessage,
  FieldHeading,
  ForgotPass,
  FormHeading,
  ImageContainer,
  Input,
  RememberMeContainer,
  RememberMeDiv,
  RememberMeInput,
  RememberMeLabel,
  SignInButton,
  SignInContainer,
  SignInFormContainer,
  SignUpheading,
  SignUpLink,
} from "./SignInComponentStyles";
import { toast } from "../../helpers/toast";
import { emailValidation } from "../../helpers/validations";
import { BannerImg, BannerLogo } from "../../assests";

export default function SignInComponent() {
  const validate = (values) => {
    const errors = {};
    const emailError = emailValidation(values.emailAddress);
    if (emailError) {
      errors.emailAddress = emailError;
    }

    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
      rememberMe: 0,
    },
    validate,
    onSubmit: { toast },
  });

  return (
    <SignInContainer>
      <ImageContainer>
        <BannerImage src={BannerImg} />
      </ImageContainer>
      <SignInFormContainer onSubmit={formik.handleSubmit}>
        <img src={BannerLogo} alt="" />
        <FormHeading>Hi, Welcome Back!</FormHeading>
        <div>
          <FieldHeading>Email address</FieldHeading>
          <Input
            id="emailAddress"
            name="emailAddress"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.emailAddress}
            placeholder="Enter your email address"
          />
          {formik.touched.emailAddress && formik.errors.emailAddress ? (
            <ErrorMessage>{formik.errors.emailAddress}</ErrorMessage>
          ) : null}
        </div>
        <div>
          <FieldHeading>Password</FieldHeading>
          <Input
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            type="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
        </div>
        <RememberMeContainer>
          <RememberMeDiv>
            <RememberMeInput
              type={"checkbox"}
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              value={formik.values.rememberMe}
            />
            <RememberMeLabel htmlFor="rememberMe">Remember Me</RememberMeLabel>
          </RememberMeDiv>
          <ForgotPass to={"/forgot-password"}>Forgot Password?</ForgotPass>
        </RememberMeContainer>
        <SignInButton type="submit">Sign In</SignInButton>
        <SignUpheading>
          Don’t have an account?
          <SignUpLink to={"/sign-up"}>&nbsp;Sign up</SignUpLink>
        </SignUpheading>
      </SignInFormContainer>
    </SignInContainer>
  );
}
