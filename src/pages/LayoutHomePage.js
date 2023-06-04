import Menu from "layout/Header/NavBar/Menu";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutHomePage = () => {
  return (
    <div>
      <Menu></Menu>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutHomePage;
