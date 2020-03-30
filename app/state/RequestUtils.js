import axios from "axios";

export const BASE_URL = 'http://localhost:6742/v1/api/covid';

export function getStatisticsDataLoadRequest (loadingParams) {
    const buildParams = loadingParams => ({
        ...loadingParams.sortBy && { sortBy: loadingParams.sortBy },
        ...loadingParams.order && { order: loadingParams.order },
        page: loadingParams.page ? loadingParams.page : 1 ,
        itemsOnPage: loadingParams.itemsOnPage ? loadingParams.itemsOnPage : 10
    });
    const searchConfig = {
        method: 'GET',
        url: `${BASE_URL}/statistics`,
        params: buildParams(loadingParams ? loadingParams : {}),
        headers: { 'accept': 'application/json' }
    };
    return axios(searchConfig);
}

export function getFilteringOptionsRequest () {
    const searchConfig = {
        method: 'GET',
        url: `${BASE_URL}/filtering`,
        headers: { 'accept': 'application/json' }
    };
    return axios(searchConfig);
}
