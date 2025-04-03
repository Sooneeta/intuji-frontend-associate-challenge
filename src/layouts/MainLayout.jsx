import AppSidebar from "./sidebar/AppSidebar";
import "../styles/layout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <AppSidebar />

      <section>{children}</section>
    </div>
  );
};

export default MainLayout;
