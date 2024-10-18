import React, { useState } from "react";
import { FaReact, FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './style.scss';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT',
        to: '/About'
    },
    {
        label: 'SKILLS',
        to: '/Skills'
    },
    {
        label: 'PORTFOLIO',
        to: '/Portfolio'
    },
    {
        label: 'RESUME',
        to: '/Resume'
    },
   /* {
        label: 'CONTACT',
        to: '/Contact'
    }*/
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    const handleLinkClick = () => {
        setToggleIcon(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to='/' className="navbar__container__logo" onClick={handleLinkClick}>
                    <FaReact size={30} />
                </Link>
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link
                                    className="navbar__container__menu__item__links"
                                    to={item.to}
                                    onClick={handleLinkClick} // Close menu on click
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
