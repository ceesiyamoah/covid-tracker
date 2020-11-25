import React from 'react';
const Stats = ({ details }) => {
	const detailsRender = details.map(({ name, value, color }) => (
		<div key={name}>
			<h4>{name}</h4>
			<span style={{ color }}>{value.toLocaleString('en')}</span>
		</div>
	));

	return <div className='stats-container'>{detailsRender}</div>;
};

export default Stats;
