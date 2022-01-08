import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../UIElements/Backdrop';

import MainHeader from './MainHeader';
import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

const MainNavigation = (props) => {
    const [drawerIsopen, setDrawerIsopen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsopen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsopen(false);
    };

    return (
        <>
            {drawerIsopen && <Backdrop onClick={closeDrawerHandler} />}
            <SideDrawer show={drawerIsopen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">YourPlaces</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </>
    );
};

export default MainNavigation;
