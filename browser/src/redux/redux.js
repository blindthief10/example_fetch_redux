import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {messageToBeShown: 'Welcome Jake'};

const reduxReducer = (state = initialState, action) => {
  const copyOfState = {...state};

  switch(action.type){
    case 'FETCHEXAMPLE':
      copyOfState.messageToBeShown = 'State has changed';
      return copyOfState;
    default:
      return copyOfState;
  }
}

export const fetchFromExpress = () => {
  return function(dispatch) {
    fetch('/example')
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(messageObject => console.log(messageObject))
    .catch(err => console.error(err))
  }
}

export const store = createStore(reduxReducer, applyMiddleware(thunk));
