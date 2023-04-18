import React from "react";
import {
  AnalyticsContainer,
  AnalyticsHeading,
  AnalyticsTopContainer,
  ChartContainer,
  OrderHeading,
  OrderMovementInfo,
  OrdersDetailContainer,
  OrdersInfoContainer,
  TotalOrders,
} from "./DashboardStyles";
import { MdOutlinePeopleAlt, MdTaskAlt } from "react-icons/md";
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";
import { HiOutlineBriefcase } from "react-icons/hi";
import { TfiBackRight } from "react-icons/tfi";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

export default function AnalyticsDashboard() {
  const data = {
    labels: [
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
      "11th",
      "12th",
      "13th",
      "14th",
      "15th",
      "16th",
      "17th",
      "18th",
      "19th",
      "20th",
      "21st",
      "22nd",
      "23rd",
      "24th",
      "25th",
      "26th",
      "27th",
      "28th",
      "29th",
      "30th",
    ],
    datasets: [
      {
        label: "Sales Per Month",
        data: [
          4, 5, 3.5, 8, 2, 4, 4, 5, 4, 6, 7, 4, 5, 2, 4, 4, 5, 4, 6, 7, 4, 5, 4,
          5, 4, 6, 7,
        ],
        backgroundColor: ["#347AE2"],
        borderWidth: 1,
      },
    ],
  };
  const OrderInfo = [
    {
      id: 1,
      Orders: "89,935",
      OrderHeading: "Total Orders",
      icon: <MdOutlinePeopleAlt size={25} color=" #347AE2" />,
      arrow: <BsArrowUpRight size={18} color="#34C759" />,
      movement: "10.2  +1.01% this week",
    },
    {
      id: 2,
      Orders: "23,283.5",
      OrderHeading: "Active Orders",
      icon: <HiOutlineBriefcase size={25} color=" #347AE2" />,
      arrow: <BsArrowUpRight size={18} color="#34C759" />,
      movement: "10.2  +0.49% this week",
    },
    {
      id: 3,
      Orders: "46,827",
      OrderHeading: "Shipped Orders",
      icon: <MdTaskAlt size={25} color=" #347AE2" />,
      arrow: <BsArrowDownLeft size={18} color="#FF3B30" />,
      movement: "10.2  -0.91% this week",
    },
    {
      id: 4,
      Orders: "124,854",
      OrderHeading: "Refunded",
      icon: <TfiBackRight size={25} color=" #347AE2" />,
      arrow: <BsArrowDownLeft size={18} color="#FF3B30" />,
      movement: "10.2  +1.01% this week",
    },
  ];
  return (
    <AnalyticsContainer>
      <AnalyticsTopContainer>
        <AnalyticsHeading>Dashboard</AnalyticsHeading>\
      </AnalyticsTopContainer>
      <OrdersInfoContainer>
        {OrderInfo.map((val) => {
          return (
            <OrdersDetailContainer>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TotalOrders>{val.Orders}</TotalOrders>
                {val.icon}
              </div>
              <OrderHeading>{val.OrderHeading}</OrderHeading>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {val.arrow}
                <OrderMovementInfo>{val.movement}</OrderMovementInfo>
              </div>
            </OrdersDetailContainer>
          );
        })}
      </OrdersInfoContainer>
      <ChartContainer>
        <Bar
          style={{ width: "90%" }}
          data={data}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                min: 0,
                max: 12,
                stepSize: 2,
              },
              x: {},
            },
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Sales History",
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </ChartContainer>
    </AnalyticsContainer>
  );
}
