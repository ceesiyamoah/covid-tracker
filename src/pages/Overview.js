import React from 'react';
import CountryList from '../components/CountryList';
import Stats from '../components/Stats';
import Header from './../components/Header';
import Search from './../components/Search';
import GoogleMaps from './../components/GoogleMaps';
const Overview = () => {
	return (
		<div className='overview-container'>
			<div className='header-container'>
				<Header title='Covid-19' trend='Global trend' />
			</div>
			<Stats />
			<div className='search-with-map-container'>
				<div>
					<Search />
					<CountryList />
				</div>
				<div style={{ width: '60%', borderRadius: '10px' }}>
					<GoogleMaps />
					sdfsd
				</div>
			</div>
		</div>
	);
};

export default Overview;
