import React from "react";
import { useFormik } from "formik";
import { BannerImg, BannerLogo } from "../../assests";
import {
  BannerImage,
  ErrorMessage,
  ImageContainer,
} from "../SignInComponent/SignInComponentStyles";
import {
  SignUpContainer,
  SignUpFormContainer,
  FormHeading,
  Input,
  FieldHeading,
  SignUpButton,
  SignInheading,
  SignInLink,
  SignUpPolicy,
} from "./SignUpComponentStyles";
import { useNavigate } from "react-router-dom";
import { emailValidation } from "../../helpers/validations";

export default function SignUpComponent() {
  const validate = (values) => {
    const errors = {};

    const emailError = emailValidation(values.email);
    if (emailError) {
      errors.email = emailError;
    }

    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };
  const history = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: async (values) => {},
  });

  return (
    <SignUpContainer>
      <ImageContainer>
        <BannerImage src={BannerImg} />
      </ImageContainer>
      <SignUpFormContainer onSubmit={formik.handleSubmit}>
        <img src={BannerLogo} alt="" />
        <div>
          <FormHeading>Sign up</FormHeading>
        </div>
        <div>
          <FieldHeading>First Name</FieldHeading>
          <Input
            id="firstName"
            name="firstName"
            type={"text"}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder="Enter your first name"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
          ) : null}
        </div>
        <div>
          <FieldHeading>Last Name</FieldHeading>
          <Input
            id="lastName"
            name="lastName"
            type={"text"}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            placeholder="Enter your last name"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
          ) : null}
        </div>
        <div>
          <FieldHeading>Email</FieldHeading>
          <Input
            id="email"
            name="email"
            type={"text"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Enter your email address"
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
        </div>
        <div>
          <FieldHeading>Create a password</FieldHeading>
          <Input
            id="password"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="must be 8 characters"
            type="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
        </div>
        <div>
          <FieldHeading>Confirm password</FieldHeading>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            placeholder="repeat password"
            type="password"
          />
        </div>
        <SignUpButton type="submit">Sign Up</SignUpButton>
        <SignInheading>
          Have an account? &nbsp;
          <SignInLink to={"/sign-in"}>Sign In</SignInLink>
        </SignInheading>
        <SignUpPolicy>
          By clicking Sign up, you are agreeing to our Terms of Service and
          Privacy Policy.
        </SignUpPolicy>
      </SignUpFormContainer>
    </SignUpContainer>
  );
}
