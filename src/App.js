import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Header from './common/header/Header';
import HomeContainer from './features/home/HomeContainer';

import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Container fixed>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Redirect to="/" />
            </Switch>
          </Container>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
