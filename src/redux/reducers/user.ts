// Esse reducer será responsável por tratar as informações da pessoa usuária
import { AnyAction } from 'redux';
import { Save_Email } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case Save_Email: {
      return {
        ...state,
        email: action.payload,
      };
    }
    default: return state;
  }
};

export default user;
