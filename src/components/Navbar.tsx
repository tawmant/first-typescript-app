import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => {
	return (
		<nav>
			<div className='nav-wrapper purple darken-3 px1'>
				<Link to='/' className='brand-logo'>
					React + Typescript
				</Link>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<Link to='/'>Список дел</Link>
					</li>
					<li>
						<Link to='/info'>Информация</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
