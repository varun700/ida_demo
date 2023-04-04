import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { SidebarContent } from "./SidebarContent";

const MenuItemGroup = Menu.ItemGroup;

const index = () => {
  const navigate = useNavigate();
  return (
    <>
      <Menu
        defaultSelectedKeys={["/"]}
        items={SidebarContent}
        onClick={({ key }) => navigate(key)}
        className="Sidebar"
      />
    </>
  );
};

export default index;
