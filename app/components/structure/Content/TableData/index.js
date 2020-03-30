import React from "react";
import './style.less';
import TableDataElement from './TableDataElement';

export default class TableData extends React.Component {

    prepareLoadedDataElement(dataElement, index) {
        return {
            ...dataElement,
            counter: index + 1 + ((this.props.page - 1) * 10)
        }
    }

    render() {
        return (
            <section className="TableData">
                <table className="table">
                    <tbody>
                    <tr className="table-header">
                        <th className="number">N</th>
                        <th className="content-cell province-state">Province/State</th>
                        <th className="content-cell country-region">Country/Region</th>
                        <th className="content-cell country-confirmed">Confirmed</th>
                        <th className="content-cell country-recovered">Recovered</th>
                        <th className="content-cell country-died">Died</th>
                    </tr>
                    { this.props.covidStatisticsData.countryDataStatistics.map((el, index) => <TableDataElement
                        element={this.prepareLoadedDataElement(el, index)} key={el.provinceState + el.countryRegion}/>) }
                    </tbody>
                </table>
            </section>
        )
    }
}
