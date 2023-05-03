import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerImage = styled.img``;

export const ErrorMessage = styled.div`
  position: relative;
  top: 0.3rem;
  color: #ff0000;
  margin-left: 0.3rem;
`;

export const SignInFormContainer = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
`;

export const FormHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  letter-spacing: -0.01em;
  color: #00000;
  align-item: start;
`;

export const FieldHeading = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: #000000;
`;

export const Input = styled.input`
  width: 353px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #d8dadc;
  border-radius: 10px;
  padding-left: 18px;
  ::-webkit-input-placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const RememberMeDiv = styled.div`
  padding-top: 1rem;
`;

export const RememberMeContainer = styled.div`
  width: 353px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const RememberMeInput = styled.input``;

export const RememberMeLabel = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  margin-left: 0.4rem;
`;

export const ForgotPass = styled(Link)`
  font-family: "Inter";
  text-decoration: none;
  margin: 1rem 0rem;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: #000000;
`;

export const SignInButton = styled.button`
  font-family: "Euclid Circular A";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  width: 23.313rem;
  height: 60px;
  left: 903px;
  top: 536px;
  border: none;
  background: #000000;
  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 1.5rem;

  &:active {
    transform: translateY(3px);
  }
`;

export const SignUpheading = styled.h4`
  margin-top: 4.25rem;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: rgba(0, 0, 0, 0.7);
`;

export const SignUpLink = styled(Link)`
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`;
