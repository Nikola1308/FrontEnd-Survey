import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'

import * as serviceWorker from './serviceWorker';
import App from './components/App'
import reducers from './reducers'
import './index.css'


ReactDOM.render(
    <Provider store={createStore(reducers,{},applyMiddleware(reduxThunk))}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    
document.getElementById('root'))

serviceWorker.unregister();
