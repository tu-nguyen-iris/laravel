import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'axios'
import {BrowserRouter} from 'react-router-dom'
import Header from "./template/header";
import FormaddText from "./template/addText"
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from './redux/index';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";

//tạo ra một Redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    )
;
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Header/>
                    <FormaddText/>
                </div>
            </BrowserRouter>
        );
    }
}
if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}><App/></Provider>
        , document.getElementById('app'));
}
