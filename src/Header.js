import React from 'react';
import mdglogo from './mdglogo.png';
import Nav from './Nav.js';

export default function Header() {
	return (
		<div class="header-wrap">
			<ul>
				<li>
					<a>
						<img src={mdglogo} width={80} />{' '}
					</a>
				</li>
			</ul>
			<Nav />
		</div>
	);
}
