// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import { ADD_EXPENSE, currencies } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, Action: AnyAction) => {
  switch (Action.type) {
    case currencies: {
      return {
        ...state,
        currencies: Action.payload,
      };
    }
    case ADD_EXPENSE: {
      return {
        ...state,
        expenses: [...state.expenses, Action.payload],
      };
    }
    default: return state;
  }
};
export default wallet;
