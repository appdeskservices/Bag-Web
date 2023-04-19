import React, { useState } from "react";
import {
  Logo,
  SideBarContainer,
  SideBarItem,
  SideBarItems,
} from "./SideBarStyles";
import { LogoImage } from "../../assests";
import { RiHomeLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
export default function SideBar({ selectedPage }) {
  const [selected, setSelected] = useState("Dashboard");
  const SideBarItemsList = [
    { id: 1, title: "Dashboard", icon: <RiHomeLine size={18} /> },
    { id: 2, title: "Orders", icon: <FiShoppingCart size={18} /> },
  ];
  return (
    <SideBarContainer>
      <Logo src={LogoImage} />
      <SideBarItems>
        {SideBarItemsList.map((val) => {
          return (
            <SideBarItem
              onClick={() => {
                setSelected(val.title);
                selectedPage(val.title);
              }}
              key={val.id}
              isActive={selected === val.title}
            >
              {val.icon}
              {val.title}
            </SideBarItem>
          );
        })}
      </SideBarItems>
    </SideBarContainer>
  );
}
