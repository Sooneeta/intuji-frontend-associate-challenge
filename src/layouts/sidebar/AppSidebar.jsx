import React from "react";
import { NavLink } from "react-router-dom"; // Correct import path

const SidebarSection = ({ items }) => (
  <section>
    {items.map((item, index) =>
      item.url ? (
        <NavLink
          key={index}
          to={item.url}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <span>{item.title}</span>
        </NavLink>
      ) : (
        <span key={index} className="sidebar-item">
          {item.title}
        </span>
      )
    )}
  </section>
);

const AppSidebar = () => {
  const featureItems = [
    { title: "Dashboard", url: "/" },
    { title: "Schedule" },
    { title: "Message" },
    { title: "Analytics" },
    { title: "Team" },
  ];

  const userItems = [
    { title: "Profile" },
    { title: "Settings" },
    { title: "Help" },
    { title: "Logout" },
  ];

  return (
    <div className="app-sidebar">
      <SidebarSection items={featureItems} />
      <hr />
      <SidebarSection items={userItems} />
    </div>
  );
};

export default AppSidebar;
