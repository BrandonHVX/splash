import React from 'react';

import './App.css';
import './style.css';
import ClickPage from './clickPage.js';
import HomeAni from './HomeAni.js';
import Nav from './Nav.js';
import Header from './Header.js';

function App() {
	return (
		<header class="header-wrap">
			<Header />
			<div class="v-header container" />

			<div class="header-content">{/* <HomeAni /> */}</div>
		</header>
	);
}

export default App;
