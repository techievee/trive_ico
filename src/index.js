import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import {BrowserRouter} from 'react-router-dom'
import {syncHistoryWithStore, ConnectedRouter} from 'react-router-redux'
import configureStore from './store/configure-store';
import * as reducers from './reducers'
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

//const history = syncHistoryWithStore(createHistory(), store)

const history = createHistory()

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <div>
//         <Route exact path="/" component={App}/>          
//         <Route path="/dashboard" component={Dashboard}/>          
//       </div>      
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />      
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);