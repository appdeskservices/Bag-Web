import React from "react";
import TopBar from "../../component/TopBar";
import SideBar from "../../component/SideBar";
import Dashboard from "../../component/DashboardComponent";
import {
  ComponentContainer,
  PageContainer,
  SideBarContainer,
  TopBarContainer,
} from "./PageStyling";

export default function DashboardPage() {
  return (
    <PageContainer>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <TopBarContainer>
        <TopBar />
      </TopBarContainer>
      <ComponentContainer>
        <Dashboard />
      </ComponentContainer>
    </PageContainer>
  );
}
