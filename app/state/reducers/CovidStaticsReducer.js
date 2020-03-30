export const initialState = {
    covidStatisticsData: {
        countryDataStatistics: [{}],
        totalConfirmed: 0,
        totalConfirmedDelta: 0,
        totalDeaths: 0,
        totalDeathsDelta: 0,
        totalRecovered: 0,
        totalRecoveredDelta: 0,
        countryDataStatisticsSize: 0
    },
    isDataLoading: false
};

export default function CovidStaticsReducer(state = initialState, action) {
    switch (action.type) {
        case 'COVID_STATISTICS_DATA_LOAD_START':
            return {
                ...state,
                isDataLoading: true
            };
        case 'COVID_STATISTICS_DATA_LOAD_SUCCESS':
            return {
                ...state,
                isDataLoading: false,
                covidStatisticsData: action.payload.statisticsData
            };
        case 'COVID_STATISTICS_DATA_LOAD_FAILED':
            return {
                ...state,
                isDataLoading: false,
                error: action.error,
                errorMessage: action.message
            };
        default:
            return state;
    }
}

