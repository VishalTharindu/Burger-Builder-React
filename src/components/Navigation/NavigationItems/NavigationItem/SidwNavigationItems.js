import React  from 'react'

import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'
const SidwNavigationItems = () => (

    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active >Check Store</NavigationItem>
        <NavigationItem link="/">Food Galary</NavigationItem>
        <NavigationItem link="/">About Us</NavigationItem>  
    </ul>
)

export default SidwNavigationItems