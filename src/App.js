import React, {Component} from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch, Link} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

class App extends Component {
    render() {
        return (<>
                <Link to='/'>HomePage</Link> { }
                <Link to='/shop'>Shop Page</Link>{  }
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route  path="/shop" component={ShopPage}/>
                </Switch>
            </>
        )
    }
}
export default App;
