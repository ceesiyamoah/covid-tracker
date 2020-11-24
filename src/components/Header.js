import React from 'react';
const Header = ({ title, trend }) => {
	return (
		<>
			<span>{title}</span>
			<span>{trend}</span>
		</>
	);
};

export default Header;
