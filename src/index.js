import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import PropTypes from 'prop-types';

import App from './components/app';
import SignIn from './components/auth/signin';
import SignOut from './components/auth/signout';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory }>
            <Route path="/" component={App}>
                <Route path = "signin" component={SignIn} />
                <Route path = "signout" component={SignOut} />
            </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
