import React, { useState } from "react";

import { Layout, theme } from "antd";
import Sidebar from "../Sidebar";
import HeaderContent from "../Header";
import AppContent from "../../routes";
import "../Sidebar/style.css";
import "../Header/style.css";
const { Header, Content, Footer, Sider } = Layout;

const index = () => {
  return (
    <Layout>
      <Header
        style={{
          padding: 0,
        }}
        className="header"
      >
        <HeaderContent />
      </Header>
      <Layout>
        <Sider defaultCollapsed={true} className="sidebar">
          <Sidebar />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <AppContent />
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default index;
