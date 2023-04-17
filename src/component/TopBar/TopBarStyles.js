import styled from "styled-components";

export const TopBarContainer = styled.div`
  position: absolute;
  width: 1000px;
  left: 241px;
  padding: 0rem 1rem;
  border-bottom: 2px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GlobalSearchInput = styled.input`
  border: none;
  padding: 1rem;
  ::-webkit-input-placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 0.94rem;
    color: #9ca3af;
  }
  &:focus {
    outline: none;
  }
`;

export const NotificationContainer = styled.div``;

export const ProfilePic = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
`;
