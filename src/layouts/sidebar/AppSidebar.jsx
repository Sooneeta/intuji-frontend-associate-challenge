import React from "react";
import { NavLink } from "react-router";
import Dashboard from "../../assets/icons/element-4.svg"
import Calendar from "../../assets/icons/Calendar.svg";
import Sms from "../../assets/icons/sms.svg";
import Chart from "../../assets/icons/Chart.svg";
import User from "../../assets/icons/user.svg";
import Team from "../../assets/icons/profile-2user.svg";
import Setting from "../../assets/icons/setting.svg";
import Logout from "../../assets/icons/login.svg";
import Help from "../../assets/icons/info-circle.svg";
import Gallery from "../../assets/icons/gallery.svg";
import "../../styles/layout.scss";


const SidebarSection = ({ items }) => (
  <div>
    {items.map((item, index) =>
      item.url ? (
        <NavLink
          key={index}
          to={item.url}
          className={({ isActive }) => `navlink ${isActive ? "active-link" : ""}`}
        >
          <img src={item.icon} />
          <span>{item.title}</span>
        </NavLink>
      ) : (
        <div key={index} className="navlink">
          <img src={item.icon} />
          <span >
            {item.title}
          </span>
        </div>

      )
    )}
  </div>
);

const AppSidebar = () => {
  const featureItems = [
    { title: "Dashboard", url: "/", icon: Dashboard },
    { title: "Schedule", icon: Calendar },
    { title: "Message", icon: Sms },
    { title: "Analytics", icon: Chart },
    { title: "Team", icon: Team },
  ];

  const userItems1 = [
    { title: "Profile", icon: User },
    { title: "Settings", icon: Setting },

  ];

  const userItems2 = [
    { title: "Help", icon: Help },
    { title: "Logout", icon: Logout },
  ]

  return (
    <div className="sidebar-wrapper">
      <section className="figure">
        <img src={Gallery} />

      </section>

      <section className="sidebar">
        <div className="feature">


          <SidebarSection items={featureItems} />

          <hr style={{ border: " 1px solid #0D163A", width: "219px", opacity: "30%" }} />
          <div>
            <SidebarSection items={userItems1} />
          </div>
        </div>
        <div className="user">

          <SidebarSection items={userItems2} />
        </div>

      </section>

    </div>
  );
};

export default AppSidebar;
