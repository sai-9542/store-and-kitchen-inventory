import React from "react";
import { Navabar } from "../compoenents/Navabar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navabar />
      <div className="main px-10 py-3 sm:pt-10 lg:pt-20">{children}</div>
    </div>
  );
};

export default Layout;
