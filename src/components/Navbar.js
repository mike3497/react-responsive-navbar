import React, { useState } from 'react';
import './Navbar.css';
import MobileMenu from './MobileMenu';
import { links } from '../data/navbar-links';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

	const handleToggleMenu = () => {
		setMobileMenuVisible(!mobileMenuVisible);
	};

	return (
		<header>
			<nav className="navbar">
				<Link to="/">
					<img className="navbar__logo" src="logoipsum-261.svg" alt="Logo" />
				</Link>
				<div>
					<ul className="navbar-nav">
						{links.map((link) => (
							<li key={link.id}>
								<NavLink to={link.path}>{link.title}</NavLink>
							</li>
						))}
					</ul>
					<button className="navbar-menu-btn" onClick={handleToggleMenu}>
						<i className="fa-solid fa-bars"></i>
					</button>
					<MobileMenu
						handleToggleMenu={handleToggleMenu}
						visible={mobileMenuVisible}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
