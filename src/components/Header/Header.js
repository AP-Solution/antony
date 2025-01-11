import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './Header.scss';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacts', href: '/contacts' },
];

export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="header">
            <div className="header__logo">
                <img
                    src="/images/logo.png"
                    alt="logo"
                    className="header__logo-img"
                />
                <span className="header__logo-title">Sentry Option</span>
            </div>
            <nav className="header__nav">
                <ul className={cn('header__nav-list',
                    isMenuOpen && 'active'
                )}>
                    {navLinks.map((link) => (
                        <li key={link.name} className="header__nav-item">
                            <NavLink
                                to={link.href}
                                className={({ isActive }) =>
                                    `header__nav-link ${isActive ? 'active' : ''}`
                                }
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div
                className={cn('header__menu-icon',
                    isMenuOpen ? 'active' : ''
                )}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span></span>
            </div>
        </header>
    )
}
