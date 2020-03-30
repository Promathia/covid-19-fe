import React from "react";
import './style.less';
import { connect } from "react-redux";
import OrderOption from "./OrderOption";
import { handleOrderChange } from "../../../../../state/actions/FilteringActions";

const OrderOptions = (props) => (
    <div className="OrderOptions">
        {props.orderingOptions.map(option =>
                <OrderOption selectedOrder={props.order} onOrderChange={props.onOrderChange} element={option} key={option}/>
            )
        }
    </div>
);

export default connect(
    (state) => ({ order: state.filteringOptionsReducer.order }),
    (dispatch) => ({ onOrderChange: (val) => dispatch(handleOrderChange(val))}))
    (OrderOptions);
