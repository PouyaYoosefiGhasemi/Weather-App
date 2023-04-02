import React from "react";
import { Nav } from "./Nav";
import "./index.css";
const Layout = (props) => {
  return (
    <div className="w-screen    flex flex-col  bg-[#94b9cb] " id="layout">
      <Nav />
      <div className={props.class} id="layout-container">
        {props.children}
      </div>
    </div>
  );
};
export { Layout, Nav };
