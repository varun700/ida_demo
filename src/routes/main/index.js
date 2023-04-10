import React from "react";
import Widget from "../../components/Widget";
import { Row, Col } from "antd";
import TableComponent from "./TableComponent";

const index = () => {
  return (
    <>
      <Row gutter={[16]}>
        {/* <div className="pageTitle"></div> */}
        <Col span={4}>
          <Widget title="Title">Content</Widget>
        </Col>
        <Col span={4}>
          <Widget title="Title">Content</Widget>
        </Col>
        <Col span={4}>
          <Widget title="Title">Content</Widget>
        </Col>
        <Col span={4}>
          <Widget title="Title">Content</Widget>
        </Col>
        <Col span={24}>
          <Widget title="Table">
            <TableComponent />
          </Widget>
        </Col>
      </Row>
    </>
  );
};

export default index;
