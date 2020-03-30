import { call, put, all, takeLatest} from 'redux-saga/effects';
import { getStatisticsDataLoadRequest, getFilteringOptionsRequest } from "./RequestUtils";
import { covidStatisticsDataLoaded, covidStatisticsDataLoadingFailed } from "./actions/CovidStaticsActions";
import { loadFilteringOptionsLoaded, loadFilteringOptionsLoadingFailed } from "./actions/FilteringActions";

export function* watchLoadStatisticsDataInitiated() {
    yield takeLatest("COVID_STATISTICS_DATA_LOAD_INITIATED", loadStatisticsData);
}

export function* watchLoadFilteringDataInitiated() {
    yield takeLatest("FILTERING_OPTIONS_LOAD_INITIATED", loadFilteringData);
}

/*export function* watchSortByChanged() {
    yield takeLatest("SORT_BY_CHANGED", handleSortByChange);
}

export function* handleSortByChange(action) {
    try {
        yield put({type: 'SORT_BY_CRITERIA_CHANGED', payload: action});
        yield put(loadFilteringOptionsLoaded(filteringOptions));
    } catch (e) {
        return loadFilteringOptionsLoadingFailed(e.message);
    }
}*/

export function* loadFilteringData() {
    try {
        yield put({type: 'FILTERING_OPTIONS_LOAD_START'});
        const response = yield call(getFilteringOptionsRequest);
        const filteringOptions = response.data;
        yield put(loadFilteringOptionsLoaded(filteringOptions));
    } catch (e) {
        return loadFilteringOptionsLoadingFailed(e.message);
    }
}

export function* loadStatisticsData(action) {
    try {
        yield put({type: 'COVID_STATISTICS_DATA_LOAD_START'});
        const response = yield call(getStatisticsDataLoadRequest, action.payload.loadingParams);
        const statisticsData = response.data;
        yield put(covidStatisticsDataLoaded(statisticsData));
    } catch (e) {
        return covidStatisticsDataLoadingFailed(e.message);
    }
}

/*
export function* watchSearchMovie() {
    yield takeLatest("SEARCH_MOVIES", searchMovieAsync);
}

export function* watchSortingChange() {
    yield takeLatest("UPDATE_SORT_BY_AND_SEARCH", searchMoviesWhenSortingChange);
}

export function* selectMovieAsync(action) {
    try {
        const response = yield call(getMovieByIdRequest, action.payload);
        const movieData = response.data;
        const searchParams = {
            parameters: {
                search: movieData.genres[0],
                searchBy: 'genres'
            }
        };
        yield put(movieFound(movieData));
        yield call(searchMovieAsync, searchMovies(searchParams, false));
    } catch (e) {
        return searchFailed(e.message);
    }
}

export function* searchMovieAsync(action) {
    try {
        const response = yield call(getMoviesSearchRequest, action.payload.searchOptions);
        const searchResults = yield response.data;
        yield put(searchSuccessful(searchResults, action.payload.isSearch));
    } catch (e) {
        return searchFailed(e.message);
    }
}

export function* searchMoviesWhenSortingChange(action) {
    yield put(updateSortBy(action.payload.parameters.sortBy));
    yield put(searchMovies(action.payload, true));
}*/

export default function* RootSaga() {
    yield all([
        watchLoadStatisticsDataInitiated(),
        watchLoadFilteringDataInitiated(),
        //watchSelectMovie(),
        //watchSortingChange()
    ]);
}
