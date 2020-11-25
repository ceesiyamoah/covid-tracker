import React, { useEffect } from 'react';
import CountryList from '../components/CountryList';
import Stats from '../components/Stats';
import Header from './../components/Header';
import Search from './../components/Search';
import GoogleMaps from './../components/GoogleMaps';
import { connect } from 'react-redux';
import { getStats } from './../components/actions/index';
const Overview = ({ getStats, aggregatedStats, stats }) => {
	useEffect(() => {
		getStats();
	}, [getStats]);
	return (
		<div className='overview-container'>
			<div className='header-container'>
				<Header title='Covid-19' trend='Global trend' />
			</div>
			<Stats details={aggregatedStats} />
			<div className='search-with-map-container'>
				<div>
					<Search />
					<CountryList list={stats} />
				</div>
				<div style={{ width: '60%', borderRadius: '10px' }}>
					<GoogleMaps />
					sdfsd
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const confirmed = state.stats.reduce(
		(total, country) => total + country.infected,
		0
	);
	const recovered = state.stats
		.map((i) => i.recovered)
		.filter((i) => i !== 'NA')
		.reduce((total, country) => total + country, 0);
	const deaths = state.stats
		.map((i) => i.deceased)
		.filter((i) => i !== 'NA')
		.reduce((total, country) => total + country, 0);
	const tested = state.stats
		.map((i) => i.tested)
		.filter((i) => i !== 'NA')
		.reduce((total, country) => total + country, 0);
	const details = [
		{ name: 'Confirmed', value: confirmed, color: '#0C1A8A' },
		{ name: 'Recovered', value: recovered, color: '#62A821' },
		{ name: 'Deaths', value: deaths, color: '#AB2027' },
		{ name: 'Tested', value: tested, color: '#42B1AF' },
	];

	console.log(
		state.stats.filter((item) =>
			item.country.toLowerCase().includes(state.searchTerm.term.toLowerCase())
		)
	);

	return {
		stats: state.stats.filter(({ country }) =>
			country.toLowerCase().includes(state.searchTerm.term.toLowerCase())
		),
		aggregatedStats: details,
	};
};

export default connect(mapStateToProps, { getStats })(Overview);
