import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {messageToBeShown: ''};

const reduxReducer = (state = initialState, action) => {
  const copyOfState = {...state};

  switch(action.type){
    case 'FETCHEXAMPLE':
      copyOfState.messageToBeShown = action.payload.message;
      return copyOfState;
    case 'ERRORCASE':
      copyOfState.messageToBeShown = action.payload.message;
      return copyOfState;
    default:
      return copyOfState;
  }
}

const putTheMessageThere = daniel => {
  return {
    type: 'FETCHEXAMPLE',
    payload: daniel
  }
}

const badRequest = error => {
  return {
    type: 'ERRORCASE',
    payload: error
  }
}

export const fetchFromExpress = () => {
  return function(dispatch) {
    fetch('/doesnotexist')
    .then(res => {
      if (res.status >= 400 && res.status < 500) {
        throw new Error('You sack already!');
      }else {
        return res.json();
      }
    })
    .then(messageObject => {
      console.log(messageObject);
      dispatch(putTheMessageThere(messageObject));
    })
    .catch(err => {
      dispatch(badRequest(err))
    })
  }
}

export const store = createStore(reduxReducer, applyMiddleware(thunk));
