import styled from "styled-components";

export const SingleOrderContainer = styled.div`
  display: flex;
  margin: 1rem 10rem 5rem 10rem;
  justify-content: space-between;
`;

export const BackContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: #9ca3af;
  margin: 2.5rem 0rem 0rem 10rem;
  cursor: pointer;
`;

export const SingleOrderTopContainer = styled.div`
  width: 43rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
`;

export const OrderStatus = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #111827;
  display: flex;
  align-items: center;
`;

export const CustomerInfoContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  border-right: 1px solid #e5e7eb;
  padding: 0rem 1.2rem 0rem 0rem;
`;

export const CustomerInfoOuterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
export const CustomerInfoKey = styled.div`
  color: #6b7280;
  font-size: 13px;
  margin-bottom: 0.5rem;
`;

export const CustomerInfoValue = styled.div`
  color: #111827;
  font-size: 13px;
`;

export const SingleOrderHeading = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #111827;
`;

export const OrderTime = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #6b7280;
`;

export const SingleOrderSummaryContainer = styled.div`
  width: 43rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
`;

export const ProductContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const ProductImage = styled.img``;

export const ProductName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #111827;
`;

export const ProductSubName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #6b7280;
`;

export const ProductPrice = styled.div`
  color: #6b7280;
`;

export const ProductQuantity = styled.div`
  color: #6b7280;
`;

export const ReceiveReturnButton = styled.button`
  width: 112px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #111827;
  margin: 1rem;
  cursor: pointer;
  margin-left: 1.5rem;
`;

export const TotalProductPrice = styled.div`
  color: #111827;
`;

export const TotalCartValueContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  color: #111827;
`;

export const PriceBreakDownContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #111827;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const PaymentsContainer = styled.div`
  width: 43rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0rem;
`;

export const CapturePaymentButton = styled.button`
  width: 125px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #111827;
`;

export const CustomerContainer = styled.div`
  width: 43rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
`;

export const CustomerName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #111827;
`;

export const CustomerCity = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #6b7280;
`;

export const TimelineContainer = styled.div`
  width: 419px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
`;

export const InputNotes = styled.input`
  width: 355px;
  height: 40px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding-right: 1rem;
  margin-top: 2rem;

  ::-webkit-input-placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
  }
`;

export const HorizontalLine = styled.hr`
  margin-top: 2rem;
  border: 1px solid #e5e7eb;
`;

export const TimeLineHeadingContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #111827;
  display: flex;
  justify-content: space-between;
  // padding: 1rem;
  margin-top: 1rem;
`;

export const SubHeading = styled.div`
  font-weight: 400;
  color: "#6B7280";
  padding-left: 1.5rem;
`;

export const TimeLineContent = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #111827;
  text-align: center;
  padding: 1rem;
`;

export const EmailField = styled.div`
  font-weight: 400;
  font-size: 12px;
`;
