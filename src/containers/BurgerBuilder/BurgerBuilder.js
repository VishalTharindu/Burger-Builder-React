import React, { Component } from 'react'
import Auxiliary from './../../hoc/Auxiliary'
import Burger from './../../components/Buger/Burger'

class BurgerBuilder extends Component{
    
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    
    render(){
        return(
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Control</div>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;