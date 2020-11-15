import React from 'react'

import classes from './Burger.module.css'
import Burgeringredent from './BurgerIingredeant/Burgeringredent'


const Burger = (props) => {

    const transformIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            
            return [...Array(props.ingredients[igKey])].map((_, i) =>{                
                return <Burgeringredent key={igKey + i} type={igKey}/>
            })
        });
    return(
        <div className={classes.Burger}>
            <Burgeringredent type="bread-top" />
            {transformIngredient}
            <Burgeringredent type="bread-bottom" />
        </div>
    )
}

export default Burger;