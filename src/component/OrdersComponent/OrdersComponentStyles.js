import styled from "styled-components";

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 2rem;
  margin: 5rem 10rem;
`;

export const OrdersTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75rem;
  margin-bottom: 2rem;
`;

export const TableBox = styled.div`
  width: 75rem;
`;

export const FilterOptions = styled.div`
  position: absolute;
  margin-top: 0.5rem;
  width: 272px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 2px 16px rgba(17, 24, 39, 0.08);
  border-radius: 8px;
  padding: 1rem 0rem;
`;

export const FilterApplyContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  border-bottom: 1px solid #e5e7eb;

  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const FilterSearchComponent = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
`;

export const FilterSearchInput = styled.input`
  font-weight: 400;
  width: 179px;
  height: 32px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding-left: 0.8rem;
  ::-webkit-input-placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
`;

export const FilterSearchButton = styled.button`
  font-weight: 600;
  height: 32px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
`;

export const FilterApplyButton = styled.button`
  width: 174px;
  height: 32px;
  background: #000000;
  border-radius: 8px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const IndividualFilterDiv = styled.div`
  border-bottom: 1px solid #e5e7eb;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #111827;
  display: flex;
  gap: 1rem;
  padding: 0.8rem 2rem;
`;

export const FilterResetButton = styled.button`
  width: 58px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  color: #111827;
`;

export const OrderHeadingContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  gap: 1rem;
`;

export const OverviewHeading = styled.div`
  color: #111827;
`;

export const DraftHeading = styled.div`
  color: #9ca3af;
`;

export const ExportContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #111827;
  display: flex;
  gap: 1rem;
`;

export const ExportButton = styled.div`
  height: 32px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 0.8rem;
  padding: 0rem 1rem;
`;

export const NewDraftButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 32px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  gap: 0.8rem;
  padding: 0rem 1rem;
`;
