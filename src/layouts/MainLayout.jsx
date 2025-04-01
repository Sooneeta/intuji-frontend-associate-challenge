import AppSidebar from "./sidebar/AppSidebar";
import "../styles/layout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <AppSidebar />

      <section className="main-section">{children}</section>
    </div>
  );
};

export default MainLayout;
