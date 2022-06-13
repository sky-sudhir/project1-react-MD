import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import redux from 'redux';
//setting up the redux central store
const CAKE_ORDERED='CAKE_ORDERED'
function orderCake(){
  return{
    type:CAKE_ORDERED,
    quantity:1
  }
}
const initialState={
  numberOfCakes:10
}
const reducer=(state=initialState,action)=>{
  switch (action.type) {
    case CAKE_ORDERED:
      return{
        ...state,
        numberOfCakes:state.numberOfCakes-1
      }
      
  
    default:
      return
        state
  }
}

//redux setup complete
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
