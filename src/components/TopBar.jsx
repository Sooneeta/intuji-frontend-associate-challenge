import "../styles/dashboard.scss"
const TopBar = ({ children }) => {
    return (
        <div className="topbar">
            {children}
        </div>
    )
}

export default TopBar;