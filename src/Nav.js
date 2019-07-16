import React from 'react';
import './nav.css';
import mdglogo from './mdglogo.png';

export default function Nav() {
	return (
		<div class="menu-wrap">
			<input type="checkbox" class="toggler" />
			<div class="hamburger">
				<div />
			</div>
			<div class="menu">
				<div>
					<div>
						<ul>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Services</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
