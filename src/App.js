import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MainApp from "./containers/MainApp";

const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<MainApp />}></Route>
    //   {/* <Route path="/hello" element={<HelloS val={"2"} />}></Route> */}
    // </Routes>
    <MainApp />
  );
};

export default App;
