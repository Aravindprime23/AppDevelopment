// src/components/SidebarToggle.js
import React from "react";

const SidebarToggle = ({ onClick }) => {
  return (
    <button className="sidebar-toggle" onClick={onClick}>
      ☰
    </button>
  );
};

export default SidebarToggle;
