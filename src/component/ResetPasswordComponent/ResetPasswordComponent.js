import { Back, BannerImg, BannerLogo } from "../../assests";
import React from "react";
import {
  BannerImage,
  ImageContainer,
} from "../SignInComponent/SignInComponentStyles";
import { useFormik } from "formik";
import {
  BackButton,
  BackButtonLink,
  FieldHeading,
  FormHeading,
  Input,
  LogInLink,
  SignInMessage,
  ResetPasswordContainer,
  ResetPasswordFormContainer,
  VerifyButton,
} from "./ResetPasswordStyles";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResetPasswordComponent() {
  const history = useNavigate();
  const { state } = useLocation();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {},
  });

  return (
    <ResetPasswordContainer>
      <ImageContainer>
        <BannerImage src={BannerImg} />
      </ImageContainer>
      <ResetPasswordFormContainer onSubmit={formik.handleSubmit}>
        <img src={BannerLogo} alt="" />
        <FormHeading>
          <BackButtonLink to={"/verify-password-reset-code"}>
            <BackButton src={Back} />
          </BackButtonLink>
          Reset Password
        </FormHeading>

        <div>
          <FieldHeading>Create new password</FieldHeading>
          <Input
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="must be 8 characters"
            type="password"
          />
        </div>
        <div>
          <FieldHeading>Confirm password</FieldHeading>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder="repeat password"
            type="password"
          />
        </div>
        <VerifyButton type="submit">Submit</VerifyButton>
        <SignInMessage>
          Remember password? <LogInLink to={"/sign-in"}>Log in</LogInLink>
        </SignInMessage>
      </ResetPasswordFormContainer>
    </ResetPasswordContainer>
  );
}
