import React, { Component } from "react"
import Auxiliary from './../../hoc/Auxiliary'
import Toolbar from './../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
import SideDrawer from './../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: true
    }
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    } 

    render() {
        console.log(this.state.showSideDrawer);
        return(
            <Auxiliary>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children} 
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;