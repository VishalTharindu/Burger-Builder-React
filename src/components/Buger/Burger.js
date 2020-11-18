import React from 'react'

import classes from './Burger.module.css'
import Burgeringredent from './BurgerIingredeant/Burgeringredent'


const Burger = (props) => {

    /*convert the object in to the arry and take the vlue of that array using the key and store
    store them in a new array*/
    let transformIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            
            return [...Array(props.ingredients[igKey])].map((_, i) =>{
                //rendering the burger ingredient acoding to deferent types
                //here we passing the deferent type of the ingredient to the burger ingredient component
                //then the burger ingredient component will return the ingredient element which match with the given type.                
                return <Burgeringredent key={igKey + i} type={igKey}/>
            })
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, [])

        if (transformIngredient.length == 0) {
            transformIngredient = <p>Please start adding ingredients!</p>
        }
    return(
        <div className={classes.Burger}>
            <Burgeringredent type="bread-top" />
            {transformIngredient}
            <Burgeringredent type="bread-bottom" />
        </div>
    )
}

export default Burger;