import React from "react";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

export const SidebarContent = [
  {
    title: "Main",
    key: "/",
    icon: <UserOutlined />,
    link: "/",
  },
  {
    title: "Second",
    key: "/second",
    icon: <VideoCameraOutlined />,
    link: "/second",
  },
];
