import React from "react";
import './style.less';
import { connect } from "react-redux";
import { handlePageChange } from "../../../../state/actions/FilteringActions";

export class PageSelection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultDisplayedPages: 5,
            currentFirstPage: 1,
            currentLastPage: 5,
        };
    }

    decreasePages = () => {
        if (this.state.currentFirstPage > 1) {
            this.setState({currentFirstPage: this.state.currentFirstPage - 1});
            this.setState({currentLastPage: this.state.currentLastPage - 1});
        }
    };

    increasePages = () => {
        if (this.state.currentLastPage < (this.props.countriesMax / this.props.itemsOnPage)) {
            this.setState({currentFirstPage: this.state.currentFirstPage + 1});
            this.setState({currentLastPage: this.state.currentLastPage + 1});
        }
    };

    render() {
        const pages = [];
        for (let page = this.state.currentFirstPage; page <= this.state.currentLastPage; page++) {
            pages.push(<p id={page} key={page} onClick={(event) => this.props.onPageSelected(event.target.id)}>{page}</p>);
        }
        return (
            <section className="PageSelection">
                <div className="page-selection-content">
                    <p onClick={this.decreasePages}>Prev</p>
                    { pages }
                    <p onClick={this.increasePages}>Next</p>
                </div>
            </section>
        )
    }

}

function mapStateToProps(state) {
    return {
        page: state.filteringOptionsReducer.page,
        itemsOnPage: state.filteringOptionsReducer.itemsOnPage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onPageSelected: (val) => dispatch(handlePageChange(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSelection);
