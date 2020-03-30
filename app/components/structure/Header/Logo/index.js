import React from 'react';
import './style.less';
import logoImage from './logo.png';

const Logo = () => (
    <div className="Logo">
        <img className="logo-image" src={logoImage}/>
        <h3 className="logo-title">COVID-19 Statistics</h3>
    </div>
);

export default Logo;
