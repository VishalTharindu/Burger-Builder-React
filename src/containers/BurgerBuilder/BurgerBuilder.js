import React, { Component } from 'react'
import Auxiliary from './../../hoc/Auxiliary'
import Burger from './../../components/Buger/Burger'
import BuildControls from './../../components/Buger/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.3,
    meat: 1.3
}

class BurgerBuilder extends Component{

    constructor(props){
        super(props)
    }
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totlaPrice: 4
    }

    addIngredientHandler= (type) =>{
        
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount

        const additionPrice = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totlaPrice
        const newPrice = oldPrice + additionPrice

        this.setState({totlaPrice : newPrice, ingredients : updatedIngredient})

    }

    removeIngredientHandler = (type) => {
        
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount - 1
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount

        const deductionPrice = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totlaPrice
        const newPrice = oldPrice - deductionPrice

        this.setState({totlaPrice : newPrice, ingredients : updatedIngredient})
    }
    
    render(){
        console.log(this.state.totlaPrice);
        
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;