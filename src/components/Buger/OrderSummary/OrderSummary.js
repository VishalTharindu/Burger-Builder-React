import React from 'react'

import Auxiliary from './../../../hoc/Auxiliary'
import Button from './../../UI/Button/Button'
const OrderSummary = (props) =>{
   const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: 
                {props.ingredients[igKey]}
            </li>)
        }) 
   return(
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious with the following ingredient</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}$</strong></p>
            <p>continue to checkout</p>
            <Button btnType="Danger" clicked={props.purchesCancled}>CANCLE</Button>
            <Button btnType="Success" clicked={props.purchesContinued}>CONTINUE</Button>
        </Auxiliary>
   )
}

export default OrderSummary