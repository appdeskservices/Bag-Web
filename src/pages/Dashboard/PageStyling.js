import styled from "styled-components";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
`;

export const TopBarContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 0;
  grid-row-end: 1;
`;

export const SideBarContainer = styled.div`
  grid-column-start: 0;
  grid-column-end: 1;
  grid-row-start: 0;
  grid-row-end: 2;
`;

export const ComponentContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;
