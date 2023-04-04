import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const MenuItemGroup = Menu.ItemGroup;

const index = () => {
  return (
    <>
      <Menu>
        <MenuItemGroup
          key="in-built-apps"
          className="gx-menu-group"
          title={"Navigation"}
        >
          <Menu.Item key="1">
            <Link to="/">
              <UploadOutlined />{" "}
              {/* <span>
                <IntlMessages id="sidebar.main" />
              </span> */}
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/second">
              <UploadOutlined />{" "}
              {/* <span>
                <IntlMessages id="sidebar.main" />
              </span> */}
            </Link>
          </Menu.Item>
        </MenuItemGroup>
      </Menu>
    </>
  );
};

export default index;
