import React from "react"
import Auxiliary from './../../hoc/Auxiliary'
import Toolbar from './../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
import SideDrawer from './../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {

    return(
        <Auxiliary>
            <Toolbar />
            <SideDrawer />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout;