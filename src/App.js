import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/hello" element={<HelloS val={"2"} />}></Route> */}
    </Routes>
  );
};

export default App;
