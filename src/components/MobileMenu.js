import React from 'react';
import './MobileMenu.css';
import { links } from '../data/navbar-links';
import { Link } from 'react-router-dom';

const MobileMenu = ({ handleToggleMenu, visible }) => {
	return (
		<div className={visible ? 'mobile-menu show' : 'mobile-menu hide'}>
			<div className="mobile-menu-btn-container">
				<button className="mobile-menu__btn" onClick={handleToggleMenu}>
					<i className="fa-solid fa-xmark"></i>
				</button>
			</div>
			<ul className="mobile-menu__ul">
				{links.map((link) => (
					<li key={link.id}>
						<Link onClick={handleToggleMenu} to={link.path}>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MobileMenu;
