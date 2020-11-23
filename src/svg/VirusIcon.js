import React from 'react';
const Virus = ({
	height = '44',
	width = '44',
	stroke = 'rgb(154,126,251)',
	fill = '#191252',
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='icon icon-tabler icon-tabler-virus'
			width={width}
			height={height}
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke={stroke}
			fill={fill}
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<circle cx='12' cy='12' r='5' />
			<path d='M12 7v-4m-1 0h2' />
			<path d='M12 7v-4m-1 0h2' transform='rotate(45 12 12)' />
			<path d='M12 7v-4m-1 0h2' transform='rotate(90 12 12)' />
			<path d='M12 7v-4m-1 0h2' transform='rotate(135 12 12)' />
			<path d='M12 7v-4m-1 0h2' transform='rotate(180 12 12)' />
			<path d='M12 7v-4m-1 0h2' transform='rotate(225 12 12)' />
			<path d='M12 7v-4m-1 0h2' transform='rotate(270 12 12)' />
			<path d='M12 7v-4m-1 0h2' transform='rotate(315 12 12)' />
		</svg>
	);
};

export default Virus;
