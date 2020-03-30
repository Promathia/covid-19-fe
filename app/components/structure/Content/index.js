import React, { useEffect } from 'react';
import './style.less';
import { connect } from "react-redux";
import TotalContainer from './TotalContainer';
import SortingSetup from './SortingSetup';
import TableData from './TableData';
import PageSelection from './PageSelection';
import { loadCovidStatisticsData } from "../../../state/actions/CovidStaticsActions";

export const Content = (props) => {

    useEffect(() => {
        props.doLoadCovidStatisticsData()
    }, []);

    useEffect(() => {
        props.doLoadCovidStatisticsData({ sortBy: props.sortBy, order: props.order, page: props.page })
    }, [props.sortBy, props.order, props.page]);

    return (
        <div className={'Content'}>
            <TotalContainer covidStatisticsData={props.covidStatisticsData}/>
            <SortingSetup/>
            <TableData covidStatisticsData={props.covidStatisticsData} page={props.page}/>
            <PageSelection countriesMax={props.covidStatisticsData.countryDataStatisticsSize}/>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        covidStatisticsData: state.covidStaticsReducer.covidStatisticsData,
        isDataLoading: state.covidStaticsReducer.isDataLoading,
        sortBy: state.filteringOptionsReducer.sortBy,
        order: state.filteringOptionsReducer.order,
        page: state.filteringOptionsReducer.page,
        itemsOnPage: state.filteringOptionsReducer.itemsOnPage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        doLoadCovidStatisticsData: (loadingParams) => dispatch(loadCovidStatisticsData(loadingParams))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
