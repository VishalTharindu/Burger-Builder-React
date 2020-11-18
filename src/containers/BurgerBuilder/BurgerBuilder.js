import React, { Component } from 'react'
import Auxiliary from './../../hoc/Auxiliary'
import Burger from './../../components/Buger/Burger'
import BuildControls from './../../components/Buger/BuildControls/BuildControls'
import Modal from './../../components/UI/Modal/Modal'
import OrderSummary from './../../components/Buger/OrderSummary/OrderSummary'
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
        purchasable: false,
        purchasing: false
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
        
        //copy the old count in to new variable
        const oldCount = this.state.ingredients[type]

        //set updated count to nthe new variable
        const updatedCount = oldCount + 1

        //create the new object and copying the elemint of the old object in to the new object
        const updatedIngredient = {
            ...this.state.ingredients
        }

        // set the new count into the perticular enliment of the new object
        updatedIngredient[type] = updatedCount

        const additionPrice = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totlaPrice
        const newPrice = oldPrice + additionPrice

        //replace the new object in to the old aobject
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

    purchesHandler = () =>{
        this.setState({purchasing: true})
    }

    purchesCancleHandler = () => {
        this.setState({purchasing: false})
    }

    purchesContinueHandler = () => {
        alert('You Continue!')
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
                <Modal show={this.state.purchasing} modalClose={this.purchesCancleHandler}>
                    <OrderSummary 
                    price={this.state.totlaPrice}
                    ingredients={this.state.ingredients}
                    purchesCancled={this.purchesCancleHandler}
                    purchesContinued={this.purchesContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    price={this.state.totlaPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchesHandler}
                    disabled={disableInfo}
                />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;