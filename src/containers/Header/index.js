import React from "react";
import { Row, Col } from "antd";

const index = () => {
  return (
    <>
      <Row align="middle" justify="space-evenly">
        <Col span={2}>
          <div className="logo">Logo</div>
        </Col>
        <Col span={20}>
          <div className="appName">Product Name</div>
        </Col>
      </Row>
    </>
  );
};

export default index;
