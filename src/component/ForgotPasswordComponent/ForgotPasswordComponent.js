import React from "react";
import { Back, BannerImg, BannerLogo } from "../../assests";
import {
  BannerImage,
  ImageContainer,
} from "../SignInComponent/SignInComponentStyles";
import { useFormik } from "formik";
import {
  BackButton,
  BackButtonLink,
  FieldHeading,
  ForgotPasswordContainer,
  ForgotPasswordFormContainer,
  ForgotPasswordMessage,
  FormHeading,
  Input,
  LogInLink,
  SendCodeButton,
  SignInMessage,
} from "./ForgotPasswordComponentStyles";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordComponent() {
  const history = useNavigate();
  const formik = useFormik({
    initialValues: {
      emailAddress: "",
    },
    onSubmit: async () => {},
  });

  return (
    <ForgotPasswordContainer>
      <ImageContainer>
        <BannerImage src={BannerImg} />
      </ImageContainer>
      <ForgotPasswordFormContainer onSubmit={formik.handleSubmit}>
        <img src={BannerLogo} alt="" />
        <FormHeading>
          <BackButtonLink to={"/sign-in"}>
            <BackButton src={Back} />
          </BackButtonLink>
          Forgot password?
        </FormHeading>
        <ForgotPasswordMessage>
          Don’t worry! It happens. Please enter the email associated with your
          account.
        </ForgotPasswordMessage>
        <div>
          <FieldHeading>Email address</FieldHeading>
          <Input
            id="emailAddress"
            name="emailAddress"
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            placeholder="Enter your email address"
          />
        </div>
        <SendCodeButton type="submit">Send Code</SendCodeButton>
        <SignInMessage>
          Remember password? <LogInLink to={"/sign-in"}>Log in</LogInLink>
        </SignInMessage>
      </ForgotPasswordFormContainer>
    </ForgotPasswordContainer>
  );
}
