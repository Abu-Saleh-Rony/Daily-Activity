import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWalking } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='nav'>
            <h3 className='title'><FontAwesomeIcon className='icon' icon={faWalking}></FontAwesomeIcon> Daily Activity</h3>
            <div className='nav-link'>
                <a href="/Home">Home</a>
                <a href="/Tutorial">Exercise</a>
                <a href="/About Me">Tutioral</a>

            </div>
        </div>
    );
};

export default Header;