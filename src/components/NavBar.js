import React from 'react';
import OverviewTab from '../svg/OverviewTab';
import VirusIcon from '../svg/VirusIcon';
const NavBar = () => {
	return (
		<div className='navbar-container'>
			<p className='logo'>
				<VirusIcon />
			</p>
			<ul className='navbar'>
				<li>
					<OverviewTab />
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
