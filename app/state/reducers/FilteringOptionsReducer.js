export const initialState = {
    sortingOptions: [],
    orderingOptions: [],
    sortBy: 'confirmed',
    order: 'descending',
    itemsOnPage: 10,
    page: 1
};

export default function FilteringOptionsReducer(state = initialState, action) {
    switch (action.type) {
        case 'FILTERING_OPTIONS_LOAD_START':
            return {
                ...state
            };
        case 'FILTERING_OPTIONS_LOAD_SUCCESS':
            return {
                ...state,
                sortingOptions: action.payload.filteringOptions.sortingOptions,
                orderingOptions: action.payload.filteringOptions.orderingOptions
            };
        case 'FILTERING_OPTIONS_LOAD_FAILED':
            return {
                ...state,
                error: action.error,
                errorMessage: action.message
            };
        case 'SORT_BY_CRITERIA_CHANGED':
            return {
                ...state,
                sortBy: action.payload.selectedSortBy
            };
        case 'ORDER_CRITERIA_CHANGED':
            return {
                ...state,
                order: action.payload.selectedOrder
            };
        case 'PAGE_NUMBER_CHANGED':
            return {
                ...state,
                page: action.payload.page
            };
        case 'ITEMS_ON_PAGE_CHANGED':
            return {
                ...state,
                page: action.payload.itemsOnPage
            };
        default:
            return state;
    }
}

