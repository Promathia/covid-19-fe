export const loadCovidStatisticsData = (loadingParams) => {
    return {
        type: "COVID_STATISTICS_DATA_LOAD_INITIATED",
        payload: {
            loadingParams: loadingParams
        }
    };
};

export const covidStatisticsDataLoaded = (statisticsData) => ({
    type: 'COVID_STATISTICS_DATA_LOAD_SUCCESS',
    payload: {
        statisticsData: statisticsData
    }
});

export const covidStatisticsDataLoadingFailed = (message) => ({
    type: 'COVID_STATISTICS_DATA_LOAD_FAILED',
    payload: message,
    error: true
});
