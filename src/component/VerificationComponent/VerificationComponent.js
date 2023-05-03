import { Back, BannerImg, BannerLogo } from "../../assests";
import React from "react";
import { useFormik } from "formik";
import {
  ImageContainer,
  BannerImage
} from "../SignInComponent/SignInComponentStyles";
import {
  BackButton,
  BackButtonLink,
  FieldHeading,
  FormHeading,
  Input,
  LogInLink,
  ResendSpan,
  SignInMessage,
  VerificationContainer,
  VerificationFormContainer,
  VerificationMessage,
  VerifyButton,
} from "./VerificationComponentStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function VerificationComponent({ page }) {
  const history = useNavigate();
  const { state } = useLocation();

  const formik = useFormik({
    initialValues: {
      verificationCode: "",
    },
    onSubmit: async () => {
    },
  });

  return (
    <VerificationContainer>
      <ImageContainer>
        <BannerImage src={BannerImg} />
      </ImageContainer>
      <VerificationFormContainer onSubmit={formik.handleSubmit}>
        <img src={BannerLogo} alt="" />
        <FormHeading>
          <BackButtonLink onClick={() => history(-1)}>
            <BackButton src={Back} />
          </BackButtonLink>
          Verification
        </FormHeading>
        <VerificationMessage>
          If you didn't receive a code, don't worry!{" "}
          <ResendSpan>Resend</ResendSpan>
        </VerificationMessage>
        <div>
          <FieldHeading>Enter verification code</FieldHeading>
          <Input
            name="verificationCode"
            id="verificationCode"
            value={formik.values.verificationCode}
            onChange={formik.handleChange}
            placeholder="Enter verification code"
            type={"text"}
          />
        </div>
        <VerifyButton type="submit">Verify</VerifyButton>
        <SignInMessage>
          Remember password? <LogInLink to={"/sign-in"}>Log in</LogInLink>
        </SignInMessage>
      </VerificationFormContainer>
    </VerificationContainer>
  );
}
