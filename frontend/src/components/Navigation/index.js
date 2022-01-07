import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import HomePage from '../HomePage';
import LandingNavSection from '../LandingPage/LandingNavSection';
import LandingPage from '../LandingPage';


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    /*
    if (sessionUser) then display Home page with Profile button and NavBar
    
    else
        render LandingPageComponent with Navlink to sign up. Convert Sign up to Modal.....
    
    */

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <HomePage user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LandingPage />
            </>
        );
    }

    return (
        <ul>
            <li>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;