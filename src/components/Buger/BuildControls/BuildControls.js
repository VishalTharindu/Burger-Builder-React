import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const BuildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrls => {
                   return <BuildControl 
                   key={ctrls.label} 
                   label={ctrls.label}
                   added={() => props.addIngredient(ctrls.type)}
                   removed={() => props.removeIngredient(ctrls.type)} 
                   />
                }
            )}
        </div>
    )

}

export default BuildControls