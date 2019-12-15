import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MainLayout from "./layouts/Main";

import Home from './pages/Home';
import List from './pages/List';

class App extends Component {
  render() {
    const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
      <Route {...rest} render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )} />
    )

    const App = () => (
      <div>
        <Switch>
          <AppRoute exact path='/' layout={MainLayout} component={Home}/>
          <AppRoute path='/list' layout={MainLayout} component={List}/>
        </Switch>
      </div>
    )

    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
