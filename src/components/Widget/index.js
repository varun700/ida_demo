import React from "react";
import { Card } from "antd";
// import PropTypes from "prop-types";

const index = ({ title, children, styleName, cover, extra, actions }) => {
  return (
    <Card
      title={title}
      actions={actions}
      cover={cover}
      className={`app-card-widget ${styleName}`}
      extra={extra}
    >
      {children}
    </Card>
  );
};

export default index;

// index.defaultProps = {
//   styleName: "",
// };

// index.propTypes = {
//   title: PropTypes.node,
//   extra: PropTypes.node,
//   cover: PropTypes.node,
//   actions: PropTypes.node,
//   children: PropTypes.node.isRequired,
// };
