import React  from 'react'

import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'
const NavigationItems = () => (

    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active >Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
        <NavigationItem link="/">About Us</NavigationItem>  
    </ul>
)

export default NavigationItems