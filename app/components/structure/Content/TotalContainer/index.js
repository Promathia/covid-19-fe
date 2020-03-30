import React from "react";
import './style.less';
import TotalDataElement from "./TotalDataElement";
import { connect } from "react-redux";

export class TotalContainer extends React.Component {

    totalElements = [
        {
            elementClassName: 'totalConfirmed',
            iconName: 'confirmedIcon',
            title: 'Confirmed',
            total: '',
            sinceTitle: 'Since yesterday',
            delta: ''
        },
        {
            elementClassName: 'totalRecovered',
            iconName: 'recoveredIcon',
            title: 'Recovered',
            total: '',
            sinceTitle: 'Since yesterday',
            delta: ''
        },
        {
            elementClassName: 'totalDeaths',
            iconName: 'deathIcon',
            title: 'Died',
            total: '',
            sinceTitle: 'Since yesterday',
            delta: ''
        }
    ];

    prepareLoadedTotalData(totalElementConfig) {
        const key = totalElementConfig.elementClassName;
        return {
            ...totalElementConfig,
            total: this.props.covidStatisticsData[key],
            delta: this.props.covidStatisticsData[key + 'Delta']
        }
    }

    render() {
        return (
            <section className="TotalContainer">
                <div className="total-data">
                    {this.totalElements.map(el => <TotalDataElement totalData={this.prepareLoadedTotalData(el)} key={el.elementClassName}/>)}
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        totalConfirmed: state.covidStaticsReducer.covidStatisticsData.totalConfirmed,
        totalConfirmedDelta: state.covidStaticsReducer.covidStatisticsData.totalConfirmedDelta,
        totalDeaths: state.covidStaticsReducer.covidStatisticsData.totalDeaths,
        totalDeathsDelta: state.covidStaticsReducer.covidStatisticsData.totalDeathsDelta,
        totalRecovered: state.covidStaticsReducer.covidStatisticsData.totalRecovered,
        totalRecoveredDelta: state.covidStaticsReducer.covidStatisticsData.totalRecoveredDelta
    };
}

export default connect(mapStateToProps, null)(TotalContainer);
