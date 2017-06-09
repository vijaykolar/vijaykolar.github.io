import React, { Component } from 'react';

class SocialIcons extends Component {
    render() {
        return (
            <ul className='social-menu'>
                <li className='social-menu__list'>
                    <a href='#' className='social-menu__link'>
                        <i className='fa fa-user'></i>
                        twitter
                    </a>
                </li>
                <li className='social-menu__list'>
                    <a href='#' className='social-menu__link'>
                        <i className='fa fa-user'></i>
                        linkedin
                    </a>
                </li>
                <li className='social-menu__list'>
                    <a href='#' className='social-menu__link'>
                        <i className='fa fa-user'></i>
                        github
                    </a>
                </li>
            </ul>
        );
    }
}
export default SocialIcons;
