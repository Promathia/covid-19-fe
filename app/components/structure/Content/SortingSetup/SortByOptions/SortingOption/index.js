import React from "react";
import './style.less';

export default function SortingOption (props) {

    const handleClick = (event) => {
        event.target.parentNode.style.display = 'none';
        props.onSortByChange(event.target.id);
    };

    return (
        <p className='SortingOption' onClick={(event) => handleClick(event)} id={props.element}>
            {props.element}
        </p>
    );
}




