import { checkPropTypes } from 'prop-types'
import React from 'react'

import BurgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

const Logo = (props) => (
    <div className={classes.Logo} >
        <img src={BurgerLogo} style={{ height:props.height}} alt="MyBurger" />
    </div>
)

export default Logo