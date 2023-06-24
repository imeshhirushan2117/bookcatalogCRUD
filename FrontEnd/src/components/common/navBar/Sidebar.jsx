import React from "react";
import { styleSheet } from "./style.css";
import home  from "../../../pages/home/home";
import about  from "../../../pages/about/about";
import contact  from "../../../pages/contact/contact";
import dashBoard  from "../../../pages/dashBoard/dashBoard";
function Sidebar() {
  return (
    <section className="navSection">
      <div className="side-nav">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/dashBoard">DashBoard</a>
      </div>
    </section>
  );
}

export default Sidebar;
