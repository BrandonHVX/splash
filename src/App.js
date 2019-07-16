import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import clamp from 'lodash-es/clamp';
import { useTransition, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const pages = [
	({ style }) => <animated.div style={{ ...style, background: 'black' }}>M</animated.div>,
	({ style }) => <animated.div style={{ ...style, color: 'red', background: 'white' }}>D</animated.div>,
	({ style }) => <animated.div style={{ ...style, background: 'red' }}>G</animated.div>
];

function App() {
	const [ index, set ] = useState(0);
	const onClick = useCallback(() => set((state) => (state + 1) % 3), []);
	const transitions = useTransition(index, (p) => p, {
		from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
	});
	return (
		<div className="simple-trans-main" onClick={onClick}>
			{transitions.map(({ item, props, key }) => {
				const Page = pages[item];
				return <Page key={key} style={props} />;
			})}
		</div>
	);
}

export default App;
