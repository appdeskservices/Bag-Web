import styled from "styled-components";

export const SideBarContainer = styled.div`
  position: absolute;
  width: 15rem;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top:3rem;
`;

export const Logo = styled.img`
  width: 7.5rem;
  height: 2.5rem;
`;

export const SideBarItems = styled.div``;

export const SideBarItem = styled.div`
  padding: 0.4rem;
  display: flex;
  justify-content: start;
  gap: 0.8rem;
  width: 11.4rem;
  height: 2rem;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
  font-size: 0.875rem;
  line-height: 20px;
  color: #111827;
  margin: 1rem;
  cursor: pointer;
  background: ${({ isActive }) => isActive && "#e5e7eb"};
  border-radius: ${({ isActive }) => isActive && "6px"};

  &:active {
    transform: translateY(3px);
  }
`;
