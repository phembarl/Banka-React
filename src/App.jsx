import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './components/Landing';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard/index';
import TransactHistory from './components/History';
import NewAccount from './components/NewAccount';
import Transact from './components/Transact';
import Guest from './hoc/Guest';
import Private from './hoc/Private';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Guest exact path="/signup" component={SignupForm} />
        <Guest path="/login" component={LoginForm} />
        <Private path="/dashboard" component={Dashboard} />
        <Private exact path="/transaction-history" component={TransactHistory} />
        <Private exact path="/create-account" component={NewAccount} />
        <Private exact path="/transact" component={Transact} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
