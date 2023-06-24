import React from "react";
import { styleSheet } from "./style.css";
function Sidebar() {
  return (
    <section className="navSection">
      <div className="side-nav">
        <a href="/">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">DashBoard</a>

      </div>
    </section>
  );
}

export default Sidebar;
