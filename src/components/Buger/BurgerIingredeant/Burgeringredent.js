import React from 'react'
import classes from './Burgeringredent.module.css'

import PropType from 'prop-types'

//here we genarate the burger ingredient match with the type which is pass from the burger component
//here we apply styels which can generate deferent type of ingredient acording to the ingredient type
const Burgeringredent = (props) => {
    let ingredient = null;

    //here we call the deferent css styles which is match with the given type of ingredient
    switch ( props.type ) {
        case ( 'bread-bottom' ):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ( 'bread-top' ):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ( 'meat' ):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ( 'cheese' ):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ( 'bacon' ):
            ingredient = <div className={classes.Bacon}></div>;
            break;
        case ( 'salad' ):
            ingredient = <div className={classes.Salad}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

//validate the prop type
Burgeringredent.propType = {
    type: PropType.string.isRequired
};

export default Burgeringredent;