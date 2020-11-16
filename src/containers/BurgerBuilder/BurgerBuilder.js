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
        totlaPrice: 4,
        purchasable: false
    }

    updatePurchasableState = (ingredients) =>{

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);

            this.setState({purchasable: sum > 0});
        
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
        this.updatePurchasableState(updatedIngredient)
    }

    removeIngredientHandler = (type) => {
        
        const oldCount = this.state.ingredients[type]

        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount

        const deductionPrice = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totlaPrice
        const newPrice = oldPrice - deductionPrice

        this.setState({totlaPrice : newPrice, ingredients : updatedIngredient})
        this.updatePurchasableState(updatedIngredient)
    }
    
    render(){
       const disableInfo = {
           ...this.state.ingredients
       }
       for (let key in disableInfo) {
          disableInfo[key] = disableInfo[key] <= 0
           
       }
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    price={this.state.totlaPrice}
                    purchasable={this.state.purchasable}
                    disabled={disableInfo}
                />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;