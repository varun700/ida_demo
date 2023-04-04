import React, { useState } from "react";

import { Layout } from "antd";
import Sidebar from "../Sidebar";
import AppContent from "../../routes";

const { Header, Content, Footer, Sider } = Layout;

const index = () => {
  return (
    <Layout>
      <Header
        style={{
          padding: 0,
        }}
      ></Header>
      <Layout>
        <Sider defaultCollapsed={true}>
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
