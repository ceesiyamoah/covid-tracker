import covid from '../../apis/covid';

export const getStats = () => async (dispatch) => {
	const { data } = await covid.get(
		'v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true'
	);
	dispatch({ type: 'GET_COUNTRIES_STATS', payload: data });
};

export const editSearchTerm = (entry) => ({
	type: 'EDIT_SEARCH_TERM',
	payload: entry,
});
