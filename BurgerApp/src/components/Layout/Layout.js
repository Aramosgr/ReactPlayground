import React, { Component } from 'react';

import Auxiliar from '../../hoc/Auxiliar';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }

    sideDrawerToggleHandle = () =>{
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <Auxiliar>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandle}/>
                <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliar>
        )
    }
};

export default Layout;