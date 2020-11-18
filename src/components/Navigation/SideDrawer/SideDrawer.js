import React from 'react'
import Logo from './../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from './../../UI/Backdrop/Backdrop'
import Auxiliary from  './../../../hoc/Auxiliary'

const SideDrawer = (props) => {

    return (
        <Auxiliary>
            <Backdrop  />
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}> 
                    <Logo />
                </div>
                <nav >
                    <NavigationItems /> 
                </nav>
            </div>
        </Auxiliary>
    )
}

export default SideDrawer