import { combineReducers } from 'redux';

const countriesStatsReducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'GET_COUNTRIES_STATS':
			return [...payload];

		default:
			return state;
	}
};

const searchTermReducer = (state = { term: '' }, { type, payload }) => {
	switch (type) {
		case 'EDIT_SEARCH_TERM':
			return { term: payload };

		default:
			return state;
	}
};

export default combineReducers({
	stats: countriesStatsReducer,
	searchTerm: searchTermReducer,
});
