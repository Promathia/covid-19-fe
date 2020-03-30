import React from "react";
import './style.less';
import TableDataElement from "../../TableData/TableDataElement";
import SortingOption from "./SortingOption";
import { handleSortByChange, loadFilteringOptions } from "../../../../../state/actions/FilteringActions";
import { connect } from "react-redux";
import { SortingSetup } from "../index";

export function SortByOptions(props) {

    const showSortByOptions = () => {
        const sortContent = document.getElementsByClassName('sort-by-content');
        if (sortContent && sortContent.length > 0) {
            if (sortContent[0].style.display === "none") {
                sortContent[0].style.display = "block";
            } else {
                sortContent[0].style.display = "none";
            }
        }
    };

    return (
        <div className="SortByOptions">
            <button className="sort-by-control" onClick={(() => showSortByOptions())}>
                Sort By: <span>{props.sortBy}</span>
            </button>
            <div className="sort-by-content">
                {props.sortingOptions
                    .filter(option => option !== props.sortBy)
                    .map(option =>
                        <SortingOption onSortByChange={props.onSortByChange} element={option} key={option}/>
                    )
                }
            </div>
        </div>
    );
}

export default connect(
    state => ({ sortBy: state.filteringOptionsReducer.sortBy}),
    dispatch => ({ onSortByChange: (val) => dispatch(handleSortByChange(val)) }))(SortByOptions);




