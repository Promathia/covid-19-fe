export const loadFilteringOptions = () => {
    return {
        type: "FILTERING_OPTIONS_LOAD_INITIATED"
    };
};

export const loadFilteringOptionsLoaded = (filteringOptions) => ({
    type: 'FILTERING_OPTIONS_LOAD_SUCCESS',
    payload: {
        filteringOptions: filteringOptions
    }
});

export const loadFilteringOptionsLoadingFailed = (message) => ({
    type: 'FILTERING_OPTIONS_LOAD_FAILED',
    payload: message,
    error: true
});

export const handleSortByChange = (val) => ({
    type: 'SORT_BY_CRITERIA_CHANGED',
    payload: {
        selectedSortBy: val
    }
});

export const handleOrderChange = (val) => ({
    type: 'ORDER_CRITERIA_CHANGED',
    payload: {
        selectedOrder: val
    }
});

export const handlePageChange = (val) => ({
    type: 'PAGE_NUMBER_CHANGED',
    payload: {
        page: val
    }
});
