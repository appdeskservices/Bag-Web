import React, { useState } from "react";
import TopBar from "../../component/TopBar";
import SideBar from "../../component/SideBar";
import Dashboard from "../../component/DashboardComponent";
import {
  ComponentContainer,
  PageContainer,
  SideBarContainer,
  TopBarContainer,
} from "./PageStyling";
import OrdersComponent from "../../component/OrdersComponent/OrdersComponent";

export default function DashboardPage() {
  const [currentPage, SetCurrentPage] = useState("Dashboard");
  return (
    <PageContainer>
      <SideBarContainer>
        <SideBar selectedPage={SetCurrentPage} />
      </SideBarContainer>
      <TopBarContainer>
        <TopBar />
      </TopBarContainer>
      <ComponentContainer>
        {currentPage === "Dashboard" ? (
          <Dashboard />
        ) : currentPage === "Orders" ? (
          <OrdersComponent />
        ) : (
          <></>
        )}
      </ComponentContainer>
    </PageContainer>
  );
}
