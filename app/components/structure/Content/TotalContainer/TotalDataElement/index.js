import React from "react";
import './style.less';
import confirmedIcon from './icons/confirmed.png';
import deathIcon from './icons/died.png';
import recoveredIcon from './icons/recovered.png';

const icons = {"confirmedIcon": confirmedIcon, "deathIcon": deathIcon, "recoveredIcon": recoveredIcon};

const TotalDataElement = (props) => (
    <div className={`TotalDataElement ${props.totalData.elementClassName }`}>
        <img className="image" src={icons[props.totalData.iconName]}/>
        <div className="text-data">
            <p className="title">{props.totalData.title}</p>
            <p className="total">{props.totalData.total.toLocaleString()}</p>
            <p className="since-title">{props.totalData.sinceTitle}</p>
            <p className="delta">{props.totalData.delta >= 0 ? '+' : '-'}{props.totalData.delta.toLocaleString()}</p>
        </div>
    </div>
);

export default TotalDataElement;
