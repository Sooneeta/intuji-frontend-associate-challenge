import AppSidebar from "./sidebar/AppSidebar";
import "../styles/layout.scss"

const MainLayout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            <section className="sidebar-section">
                <AppSidebar />
            </section>
            <section className="main-section">
                {children}
            </section>

        </div>
    )
}

export default MainLayout;