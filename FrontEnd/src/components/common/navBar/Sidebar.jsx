import React from "react";
import {styleSheet} from "./style.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import DashboardIcon from '@mui/icons-material/Dashboard';
//import { sideBarData } from "./sideBarData";
//import { Icon } from '@mui/material';
// import home from "../../../pages/home/home";
// import about from "../../../pages/about/about";
// import contact from "../../../pages/contact/contact";
// import dashBoard from "../../../pages/dashBoard/dashBoard";


const Sidebar = () => {


    const sideBarData = [
        {
            title: "Home",
            icon: <HomeIcon/>,
            link: "/home",
        },

        {
            title: "About",
            icon: <InfoIcon/>,
            link: "/about",
        },

        {
            title: "Contact",
            icon: <ContactsIcon/>,
            link: "/contact",
        },

        {
            title: "DashBoard",
            icon: <DashboardIcon/>,
            link: "/dashBoard",
        },

    ]


    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {sideBarData.map((val, key) => (
                    <li
                        key={key}
                        className="row"
                        id={window.location.pathname === val.link ? "active" : ""}
                        onClick={() => {
                            window.location.pathname = val.link;
                        }}

                    >
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
