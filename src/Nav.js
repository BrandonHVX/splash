import React from 'react';

export default function Nav() {
	return (
		<div>
			<nav class="navbar navbar-fixed-top navbar-default">
				<div class="container">
					<button type="button" class="navbar-toggle">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar" />
						<span class="icon-bar" />
						<span class="icon-bar" />
					</button>

					<nav class="navbar-fullscreen" id="navbar-middle">
						<button type="button" class="close" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<ul class="navbar-fullscreen-links">
							<li>
								<a href="./index.html" title="">
									Home
								</a>
							</li>
							<li>
								<a href="./project.html" title="">
									Project
								</a>
							</li>
							<li>
								<a href="./about.html" title="">
									About me
								</a>
							</li>
							<li>
								<a href="./components.html" title="">
									Components
								</a>
							</li>
						</ul>

						<div class="footer-container">
							<p>
								<small>
									© Untitled | Website created with{' '}
									<a
										href="http://www.mashup-template.com/"
										title="Create website with free html template"
									>
										Mashup Template
									</a>/<a href="https://www.unsplash.com/" title="Beautiful Free Images">
										Unsplash
									</a>
								</small>
							</p>
							<p class="footer-share-icons">
								<a href="https://www.twitter.com" class="fa-icon" title="">
									<i class="fa fa-twitter" aria-hidden="true" />
								</a>
								<a href="https://www.linkedin.com" class="fa-icon" title="">
									<i class="fa fa-instagram" aria-hidden="true" />
								</a>
								<a href="https://www.behance.com" class="fa-icon" title="">
									<i class="fa fa-behance" aria-hidden="true" />
								</a>
								<a href="https://www.vimeo.com" class="fa-icon" title="">
									<i class="fa fa-vimeo" aria-hidden="true" />
								</a>
							</p>
						</div>
					</nav>
				</div>
			</nav>
		</div>
	);
}
