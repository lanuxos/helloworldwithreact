import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyCom from './MyCom';
import MyComLifeCycle from './MyComLifeCycle';
import MyComNode_ from './MyComNode_';
import MyComNode from './MyComNode';
import MyComJsxEvent_ from './MyComJsxEvent_';
import MyComJsxEvent from './MyComJsxEvent';
import MyComSetState_ from './MyComSetState_';
import MyComSetState from './MyComSetState';
import MyComStateMap from './MyComStateMap';
import MyComState from './MyComState';
import MyComPropsValidation from './MyComPropsValidation';
import MyComPropsDefault from './MyComPropsDefault';
import MyComPropsFunction from './MyComPropsFunction';
import MyComProps from './MyComProps';
import MyComCondition from './MyComCondition';
import MyComChild from './MyComChild';
import MyComChildFragment from './MyComChildFragment';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <MyCom />
    <MyComNode_ />
    <MyComNode />
    <MyComJsxEvent_ />
    <MyComJsxEvent />
    <MyComSetState_ />
    <MyComSetState />
    <MyComStateMap />
    <MyComState />
    <MyComPropsValidation  />
    <MyComPropsDefault  />
    <MyComPropsFunction  />
    <MyComProps  />
    <MyComChildFragment />
    <MyComChild />
    <MyComCondition />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
