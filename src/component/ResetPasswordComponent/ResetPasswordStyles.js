import { Link } from "react-router-dom";
import styled from "styled-components";

export const ResetPasswordContainer = styled.div`
  display: flex;
`;

export const ResetPasswordFormContainer = styled.form`
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
  width: 23.313rem;
`;

export const FieldHeading = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: #000000;
  margin-bottom: 0.5rem;
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

export const VerifyButton = styled.button`
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
  margin-top: 2rem;
  &:active {
    transform: translateY(3px);
  }
`;

export const SignInMessage = styled.h4`
  margin-top: 4.25rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: rgba(0, 0, 0, 0.7);
`;

export const BackButtonLink = styled(Link)``;

export const BackButton = styled.img`
  position: absolute;
  left: 62%;
  top: 24%;
`;

export const LogInLink = styled(Link)`
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`;
