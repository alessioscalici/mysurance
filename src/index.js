import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import thunk from 'redux-thunk';
import { compose } from 'redux';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import InsuranceListPageContainer from './ui/insurance/InsuranceListPageContainer';
import NewInsurancePage from './ui/insurance/NewInsurancePage';

import rootReducer from './state/rootReducer';

const history = createHistory()

const routerMdw = routerMiddleware(history)

const composeParams = [applyMiddleware(thunk, routerMdw)];

// enables Redux devtools extension if present
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeParams.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(
  rootReducer,
  undefined,
  compose(...composeParams),
)

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={InsuranceListPageContainer}/>
          <Route path="/insurance/new" component={NewInsurancePage}/>
        </div>
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('root'),
);
registerServiceWorker()
