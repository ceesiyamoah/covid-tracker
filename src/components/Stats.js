import React from 'react';
const Stats = () => {
	const num = 12442;
	return (
		<div className='stats-container'>
			<div>
				<h4>Aggregated confirmed</h4>
				<span style={{ color: '#ab4432' }}>{num.toLocaleString('en')}</span>
			</div>
			<div>2nd</div>
			<div>3rd</div>
			<div>4th</div>
		</div>
	);
};

export default Stats;
