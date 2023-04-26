import React from "react";
import {
  CustomerInfoContainer,
  CustomerInfoKey,
  CustomerInfoOuterContainer,
  CustomerInfoValue,
  OrderStatus,
  OrderTime,
  SingleOrderContainer,
  SingleOrderHeading,
  SingleOrderSummaryContainer,
  SingleOrderTopContainer,
  ProductContainer,
  ProductSubName,
  ProductName,
  ProductImage,
  ProductPrice,
  ProductQuantity,
  TotalProductPrice,
  TotalCartValueContainer,
  PriceBreakDownContainer,
  PaymentsContainer,
  CapturePaymentButton,
  CustomerContainer,
  CustomerName,
  CustomerCity,
  TimelineContainer,
  InputNotes,
  HorizontalLine,
  BackContainer,
  TimeLineHeadingContainer,
  TimeLineContent,
  EmailField,
  ReceiveReturnButton,
  SubHeading,
} from "./SingleOrderComponentStyles";
import { RxDotFilled } from "react-icons/rx";
import { BiArrowBack } from "react-icons/bi";
import { ProductImg } from "../../assests";
import { useNavigate } from "react-router-dom";
import { BiDotsHorizontalRounded, BiCheckCircle } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { TbCircleDotFilled } from "react-icons/tb";
import { CgDanger } from "react-icons/cg";
import { MdOutlineLocalShipping } from "react-icons/md";

export default function SingleOrderComponent() {
  const navigate = useNavigate();
  const OrderDetail = [
    {
      key: "Email",
      value: "atavis@gmail.com",
    },
    {
      key: "Phone",
      value: "+45 31 90 35 90",
    },
    { key: "Payment", value: "Credit Card" },
    { key: "Sales Channel", value: "Website" },
  ];

  const PriceBreakDown = [
    {
      key: "Subtotal",
      value: "5,160.00 kr.",
    },
    {
      key: "Discount",
      value: "-1,032.00 kr.",
    },
    {
      key: "Shipping",
      value: "100.00 kr.",
    },
    {
      key: "Standard shipping fee",
      value: "40.00 kr.",
    },
    {
      key: "Special shipping surcharge",
      value: "60.00 kr.",
    },
    {
      key: "Tax @ 12,5%",
      value: "528.50 kr.",
    },
  ];

  const ProductList = [
    {
      img: ProductImg,
      name: "Classic Bathrobe (Carmel)",
      subName: "Large",
      price: "1,345.00 kr.",
      quantity: "x 1",
      totalAmount: "1,345.00 kr.",
    },
    {
      img: ProductImg,
      name: "Classic Bathrobe (Carmel)",
      subName: "Large",
      price: "1,345.00 kr.",
      quantity: "x 1",
      totalAmount: "1,345.00 kr.",
    },
    {
      img: ProductImg,
      name: "Towels (Coastal Stripes)",
      subName: "Bath Towel",
      price: "495.00 kr.",
      quantity: "x 2",
      totalAmount: "990.00 kr.",
    },
  ];
  return (
    <>
      <BackContainer onClick={() => navigate(-1)}>
        <BiArrowBack size={20} /> Back to Orders
      </BackContainer>
      <SingleOrderContainer>
        <div>
          <SingleOrderTopContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <SingleOrderHeading>Order #2414</SingleOrderHeading>
                <OrderTime>29 January 2022, 23:01</OrderTime>
              </div>
              <OrderStatus>
                <RxDotFilled color="#34D399" size={20} /> Paid
              </OrderStatus>
            </div>
            <CustomerInfoOuterContainer>
              {OrderDetail.map((val) => {
                return (
                  <CustomerInfoContainer>
                    <CustomerInfoKey>{val.key}</CustomerInfoKey>
                    <CustomerInfoValue>{val.value}</CustomerInfoValue>
                  </CustomerInfoContainer>
                );
              })}
            </CustomerInfoOuterContainer>
          </SingleOrderTopContainer>
          <SingleOrderSummaryContainer>
            <SingleOrderHeading>Summary</SingleOrderHeading>
            {ProductList.map((product) => {
              return (
                <ProductContainer>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <ProductImage src={product.img} />
                    <div>
                      <ProductName> {product.name}</ProductName>
                      <ProductSubName>{product.subName}</ProductSubName>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "1.7rem" }}>
                    <ProductPrice>{product.price}</ProductPrice>
                    <ProductQuantity>{product.quantity}</ProductQuantity>
                    <TotalProductPrice>{product.totalAmount}</TotalProductPrice>
                  </div>
                </ProductContainer>
              );
            })}
            {PriceBreakDown.map((val) => {
              return (
                <PriceBreakDownContainer>
                  <div>{val.key}</div>
                  <div>{val.value}</div>
                </PriceBreakDownContainer>
              );
            })}

            <TotalCartValueContainer>
              Total
              <div style={{ fontSize: "24px" }}>4,756.50 kr.</div>
            </TotalCartValueContainer>
          </SingleOrderSummaryContainer>
          <PaymentsContainer>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <SingleOrderHeading>Payments</SingleOrderHeading>
              <div style={{ display: "flex", gap: "1rem" }}>
                <OrderStatus>
                  <RxDotFilled color="#F43F5E" size={20} /> Paid
                </OrderStatus>
                <CapturePaymentButton>Capture Payment </CapturePaymentButton>
              </div>
            </div>
            <ProductContainer>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div>
                  <ProductName>01FT9SAZGFM5RTX88328W5C3HB</ProductName>
                  <ProductSubName>29 January 2022, 23:01</ProductSubName>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1.7rem" }}>
                <ProductQuantity>Paypal</ProductQuantity>
                <TotalProductPrice>4,756.50 kr.</TotalProductPrice>
              </div>
            </ProductContainer>
            <TotalCartValueContainer>
              Total
              <div style={{ fontWeight: "400" }}>4,756.50 kr.</div>
            </TotalCartValueContainer>
          </PaymentsContainer>
          <CustomerContainer>
            <SingleOrderHeading>Customer</SingleOrderHeading>
            <CustomerName>Athan Travis</CustomerName>
            <CustomerCity>New York, USA </CustomerCity>
            <CustomerInfoOuterContainer>
              <CustomerInfoContainer>
                <CustomerInfoKey>Contact</CustomerInfoKey>
                <CustomerInfoValue>
                  atavis@gmail.com <br /> +45 31 90 35 90
                </CustomerInfoValue>
              </CustomerInfoContainer>
              <CustomerInfoContainer>
                <CustomerInfoKey>Shipping</CustomerInfoKey>
                <CustomerInfoValue>
                  5 Washington Square S <br /> New York, NY 10012, USA
                </CustomerInfoValue>
              </CustomerInfoContainer>
              <CustomerInfoContainer>
                <CustomerInfoKey>Billing</CustomerInfoKey>
                <CustomerInfoValue>No billing address</CustomerInfoValue>
              </CustomerInfoContainer>
            </CustomerInfoOuterContainer>
          </CustomerContainer>
        </div>
        <TimelineContainer>
          <SingleOrderHeading>Timeline</SingleOrderHeading>
          <InputNotes placeholder="  Write a note..." />
          <HorizontalLine />
          <TimeLineHeadingContainer>
            <div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <TbCircleDotFilled size={18} color="#60A5FA" />
                nikolaj@teklafabrics.com
              </div>
              <SubHeading>21 January 2022, 18:30</SubHeading>
            </div>
            <BiDotsHorizontalRounded size={25} color="#111827" />
          </TimeLineHeadingContainer>
          <TimeLineContent>
            Return will be shipped together with return 74421
          </TimeLineContent>
          <TimeLineHeadingContainer>
            <div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <AiOutlineMail size={18} color="#6B7280" /> Shipment Notice Sent
              </div>
              <SubHeading>21 January 2022, 18:30</SubHeading>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <BiDotsHorizontalRounded size={25} color="#111827" />
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <BsArrowRight size={18} color="#111827" />
                <EmailField>atavis@gmail.com</EmailField>
              </div>
            </div>
          </TimeLineHeadingContainer>
          <TimeLineHeadingContainer>
            <div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <CgDanger size={20} color="#FB923C" /> Return Requested
              </div>
              <SubHeading>21 January 2022, 18:30</SubHeading>
            </div>
            <BiDotsHorizontalRounded size={25} color="#111827" />
          </TimeLineHeadingContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
              paddingLeft: "1.5rem",
            }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              <ProductImage src={ProductImg} />
              <div>
                <ProductName> Classic Bathrobe (Carmel)</ProductName>
                <ProductSubName>Large</ProductSubName>
              </div>
            </div>
            <div>
              <ProductQuantity>x 1</ProductQuantity>
            </div>
          </div>
          <ReceiveReturnButton>Receive Return</ReceiveReturnButton>
          <TimeLineHeadingContainer>
            <div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <AiOutlineMail size={18} color="#6B7280" /> Shipment Notice Sent
              </div>
              <SubHeading>21 January 2022, 18:30</SubHeading>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <BiDotsHorizontalRounded size={25} color="#111827" />
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <BsArrowRight size={18} color="#111827" />
                <EmailField>atavis@gmail.com</EmailField>
              </div>
            </div>
          </TimeLineHeadingContainer>
          <TimeLineHeadingContainer>
            <div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <MdOutlineLocalShipping size={19} /> Items Shipped
              </div>
              <SubHeading>21 January 2022, 18:30</SubHeading>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <BiDotsHorizontalRounded size={25} color="#111827" />
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                }}
              ></div>
            </div>
          </TimeLineHeadingContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
              paddingLeft: "1.5rem",
            }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              <ProductImage src={ProductImg} />
              <div>
                <ProductName> Classic Bathrobe (Carmel)</ProductName>
                <ProductSubName>Large</ProductSubName>
              </div>
            </div>
            <div>
              <ProductQuantity>x 1</ProductQuantity>
            </div>
          </div>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
              paddingLeft: "1.5rem",
            }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              <ProductImage src={ProductImg} />
              <div>
                <ProductName> Towels (Coastal Stripes)</ProductName>
                <ProductSubName>Large</ProductSubName>
              </div>
            </div>
            <div>
              <ProductQuantity>x 2</ProductQuantity>
            </div>
          </div>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
              paddingLeft: "1.5rem",
            }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              <ProductImage src={ProductImg} />
              <div>
                <ProductName> Linen Bedspread (Sand Grey)</ProductName>
                <ProductSubName>240x260</ProductSubName>
              </div>
            </div>
            <div>
              <ProductQuantity>x 1</ProductQuantity>
            </div>
          </div>
          <TimeLineHeadingContainer>
            <div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <AiOutlineMail size={18} color="#6B7280" /> Order Confirmation
                Sent
              </div>
              <SubHeading>21 January 2022, 18:30</SubHeading>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <BiDotsHorizontalRounded size={25} color="#111827" />
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <BsArrowRight size={18} color="#111827" />
                <EmailField>atavis@gmail.com</EmailField>
              </div>
            </div>
          </TimeLineHeadingContainer>
          <TimeLineHeadingContainer>
            <div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <BiCheckCircle size={18} color="#111827" /> Order placed
              </div>
              <SubHeading>21 January 2022, 18:30</SubHeading>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              4,756.50 kr.
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <EmailField>VISA *5545</EmailField>
              </div>
            </div>
          </TimeLineHeadingContainer>
        </TimelineContainer>
      </SingleOrderContainer>
    </>
  );
}
