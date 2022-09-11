import React from 'react';
import './siteLayoutHeader.css';
import logo from '../../assets/logo.png'

function SiteHeadingCard() {
    return (
        <div className="topBar">
            <img src={logo} alt="dashboard" className="dashboardImage" />
        </div>
    )
}

export default SiteHeadingCard;