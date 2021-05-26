import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab);
library.add(fas);

// Components
import Header from './Header';
import Footer from './Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import TOS from './pages/TOS';
import NotFound from './pages/errors/NotFound';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}


class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <Header />
            <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/pricing" component={Pricing} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/tos" component={TOS} />
                  <Route path='/404' component={NotFound}/>
                  <Route render={() => (
                    <Redirect to="/404"/>
                  )}/>
                </Switch>
            <Footer />
      </BrowserRouter>
    );
  }
}

export default withLDProvider({ 
  clientSideID: '5f47fd41f867cb099bf3e825',
  user: {
      "key": "1",
      "name": "Parker",
      "email": "me@parkersmith.io"
  }
})(App);
