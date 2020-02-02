import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  HomeComponent,
  AboutComponent,
  ContactComponent,
  Navigation,
  ServicesComponent,
  Footer
} from './component';

const RouteComponent = () => {
  return (
    <React.Fragment>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/services">
            <ServicesComponent/>
          </Route>
          <Route path="/about">
            <AboutComponent />
          </Route>
          <Route path="/contactinfo">
            <ContactComponent />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </React.Fragment>
  )
}

export default RouteComponent