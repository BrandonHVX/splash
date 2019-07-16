import React, { useRef, useState, useEffect, useCallback } from 'react';
import { render } from 'react-dom';
import { useTransition, animated } from 'react-spring';

export default function HomeAni() {
	const ref = useRef([]);
	const [ items, set ] = useState([]);
	const transitions = useTransition(items, null, {
		from: {
			opacity: 0,
			height: 0,
			innerHeight: 0,
			transform: 'perspective(610px) rotateX(0deg)',
			color: '#8fa5b6'
		},
		enter: [
			{ opacity: 1, height: 100, innerHeight: 110 },
			{ transform: 'perspective(610px) rotateX(180deg)', color: '#28d79f' },
			{ transform: 'perspective(610px) rotateX(0deg)' }
		],
		leave: [ { color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 } ],
		update: { color: '#28b4d7' }
	});

	const reset = useCallback(() => {
		ref.current.map(clearTimeout);
		ref.current = [];
		set([]);
		ref.current.push(setTimeout(() => set([ 'Music', 'Film', 'Management' ]), 2000));
		ref.current.push(setTimeout(() => set([ 'Music', 'Film' ]), 5000));
		ref.current.push(setTimeout(() => set([ 'Music', 'Film', 'Management' ]), 8000));
	}, []);

	useEffect(() => void reset(), []);

	return (
		<div>
			{transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
				<animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
					<animated.div style={{ overflow: 'none', height: innerHeight }}>{item}</animated.div>
				</animated.div>
			))}
		</div>
	);
}
