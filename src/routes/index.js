import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./main";
import Second from "./second";

const index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/second" element={<Second />} />
    </Routes>
  );
};

export default index;
