import React from "react";
import { Row, Col, Avatar, Select } from "antd";

const index = () => {
  return (
    <>
      <Row align="middle" justify="space-evenly">
        <Col span={2}>
          <div className="logo">Logo</div>
        </Col>
        <Col span={11}>
          <div className="appName">Product Name</div>
        </Col>
        <Col span={5}>
          <Select defaultValue="lucy" className="headerSelect">
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select>
        </Col>
        <Col span={4}>
          <div className="userInfo">
            <div className="userImage">
              <Avatar size="large">U</Avatar>
            </div>
            <div className="userDesc">
              <p className="userName">
                <b>User Name</b>
              </p>
              <p className="userDesig">User Designation</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default index;
