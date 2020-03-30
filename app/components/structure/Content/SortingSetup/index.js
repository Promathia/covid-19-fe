import React from "react";
import './style.less';
import SortByOptions from "./SortByOptions";
import OrderOptions from "./OrderOptions";
import { connect } from "react-redux";
import { loadFilteringOptions, handleSortByChange } from '../../../../state/actions/FilteringActions';

export class SortingSetup extends React.Component {

    componentDidMount() {
        this.props.doLoadFilteringOptions();
    }

    render() {
        return (
            <section className="SortingSetup">
                <SortByOptions sortingOptions={this.props.sortingOptions} />
                <OrderOptions orderingOptions={this.props.orderingOptions} />
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        sortingOptions: state.filteringOptionsReducer.sortingOptions,
        orderingOptions: state.filteringOptionsReducer.orderingOptions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        doLoadFilteringOptions: () => dispatch(loadFilteringOptions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingSetup);
