import React from 'react';
const Search = () => {
	return (
		<div
			style={{
				backgroundColor: '#f0f3f7',
				padding: '10px',
				borderRadius: '20px',
				display: 'flex',
			}}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='icon icon-tabler icon-tabler-search'
				width='20px'
				height='20px'
				viewBox='0 0 24 24'
				strokeWidth='1.5'
				stroke='#2c3e50'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<circle cx='10' cy='10' r='7' />
				<line x1='21' y1='21' x2='15' y2='15' />
			</svg>
			<input
				type='text'
				placeholder='Search Country'
				style={{
					border: 'none',
					marginLeft: '10px',
					backgroundColor: 'transparent',
				}}
			/>
		</div>
	);
};

export default Search;
