import React from 'react';
// import './App.css'
import  {Bannerfold}  from './includes/bannerfold';
import {Servicesfold} from './includes/servicesfold';
import {Footer} from './includes/footer';
import {PortfolioInclude} from './includes/portfolio';
export const HomeComponent = () => {
    return (
        <React.Fragment>
            <Bannerfold/>
            <Servicesfold/>
            <PortfolioInclude/>
          
        </React.Fragment>
    )
}
