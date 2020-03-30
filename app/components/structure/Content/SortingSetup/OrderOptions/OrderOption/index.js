import React from "react";
import './style.less';

const OrderOption = (props) => (
    <>
        <input
            onClick={(event) => (props.onOrderChange(event.target.id))}
            type="radio"
            className={`OrderOption-${props.element}`}
            name="ordering-options"
            value={props.element}
            id={props.element}
            checked={props.element === props.selectedOrder}/>
        <label htmlFor={props.element}>{props.element}</label>
    </>
);

export default OrderOption;
