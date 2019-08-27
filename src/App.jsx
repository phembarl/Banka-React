import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './components/Landing';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Guest from './hoc/Guest';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Guest exact path="/signup" component={SignupForm} />
        <Guest exact path="/login" component={LoginForm} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
