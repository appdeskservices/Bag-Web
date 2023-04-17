import React from "react";
import {
  GlobalSearchInput,
  NotificationContainer,
  ProfilePic,
  TopBarContainer,
} from "./TopBarStyles";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ProfileImage } from "../../assests";

export default function TopBar() {
  return (
    <TopBarContainer>
      <div>
        <BsSearch color="#9ca3af" />
        <GlobalSearchInput placeholder={"Search anything..."} />
      </div>

      <NotificationContainer>
        <IoMdNotificationsOutline size={25} color="#6B7280" style={{cursor : "pointer"}} />
        <ProfilePic src={ProfileImage} />
      </NotificationContainer>
    </TopBarContainer>
  );
}
