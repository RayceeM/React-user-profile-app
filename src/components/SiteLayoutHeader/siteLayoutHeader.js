import './SiteLayoutHeader.css';
import logo from '../../assets/logo.png'

export function SiteHeadingCard() {
    return (
        <div className="topBar">
            <img src={logo} alt="dashboard" className="dashboardImage" />
        </div>
    )
}
