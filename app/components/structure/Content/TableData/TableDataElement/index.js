import React from 'react';
import './style.less';

const TableDataElement = (props) => (
    <tr className='TableDataElement'>
        <th className='number'>{props.element.counter}</th>
        <th className='content-cell province-state'>{props.element.provinceState}</th>
        <th className='content-cell country-region'>{props.element.countryRegion}</th>
        <th className='content-cell country-confirmed'>{props.element.confirmedNumber ? props.element.confirmedNumber.toLocaleString() : props.element.confirmedNumber}</th>
        <th className='content-cell country-recovered'>{props.element.recoveredNumber ? props.element.recoveredNumber.toLocaleString() : props.element.recoveredNumber}</th>
        <th className='content-cell country-died'>{props.element.deathsNumber ? props.element.deathsNumber.toLocaleString() : props.element.deathsNumber}</th>
    </tr>
);

export default TableDataElement;
