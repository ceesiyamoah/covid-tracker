import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Overview from './pages/Overview';
const App = () => {
	return (
		<div className='app'>
			<NavBar />
			<Overview />
		</div>
	);
};

export default App;
