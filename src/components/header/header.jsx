import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import HomePage from "../../pages/homepage/homepage.component";
import ShopPage from "../../pages/shop/shop.component";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./header-styles.scss"

const Header = () => {

    return (
        <>
        <div className="header">
            <Link to='/' className='logo-container'>
                <Logo className="logo"></Logo>
            </Link>

            <div className='options'>
                <Link  className='option' to='/shop'>
                SHOP
                </Link>
                <Link  className='option' to='/shop'>
                    { } CONTACT
                </Link>
                <Link  className='option' to='/'>
                    { } HOMEPAGE
                </Link>

            </div>

        </div>
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
    </Switch>
    </>
    )
}


export default Header;