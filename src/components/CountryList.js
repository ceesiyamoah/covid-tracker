import React from 'react';
const CountryList = ({ list }) => {
	const renderList = list.map(({ country, infected }) => (
		<div key={country}>
			<b>{infected && infected.toLocaleString('en')}</b> {country}
		</div>
	));
	return (
		<div
			className='div-to-scroll'
			style={{
				margin: '30px 0 0 10px',
				display: 'flex',
				flexDirection: 'column',
				overflow: 'hidden',
				overflowY: 'scroll',
				height: '80%',
			}}
		>
			{renderList}
		</div>
	);
};

export default CountryList;
