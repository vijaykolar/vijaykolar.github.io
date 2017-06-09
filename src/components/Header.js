import React, { Component } from 'react';
import SocialIcons from './SocialIcons';


class Header extends Component {


    render() {

        //Left Navigation Menu List Items

        return (
            <nav className="navbar navbar--fixed-top">
                <div className='container'>
                    <div className='navbar__header'>
                        
                        <ul className='navbar-menu'>
                            <li className='navbar-menu__list'>
                                <a href='#' className='navbar-menu__link'>
                                    projects
                                </a>
                            </li>
                            <li className='navbar-menu__list'>
                                <a href='#' className='navbar-menu__link'>
                                    about
                                </a>
                            </li>
                            <li className='navbar-menu__list'>
                                <a href='#' className='navbar-menu__link'>
                                    contact
                                </a>
                            </li>
                        </ul>

                        <SocialIcons />
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
