import React, { useState } from "react";
import TopBar from "../../component/TopBar";
import SideBar from "../../component/SideBar";
import Dashboard from "../../component/DashboardComponent";
import {
  ComponentContainer,
  PageContainer,
  SideBarContainer,
  TopBarContainer,
} from "../Dashboard/PageStyling";
import SingleOrderComponent from "../../component/SingleOrderComponent/SingleOrderComponent";

export default function SingleOrderPage() {
  const [currentPage, SetCurrentPage] = useState("Orders");
  return (
    <PageContainer>
      <SideBarContainer>
        <SideBar selectedPage={SetCurrentPage} currentPage={currentPage} />
      </SideBarContainer>
      <TopBarContainer>
        <TopBar />
      </TopBarContainer>
      <ComponentContainer>
        <SingleOrderComponent />
      </ComponentContainer>
    </PageContainer>
  );
}
