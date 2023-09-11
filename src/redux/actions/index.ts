// Coloque aqui suas actions
export const SaveEmail = 'Save_Email';

export const submitLogin = (user: any) => ({
  type: SaveEmail,
  payload: user,
});

export const currencies = 'currencies';

export const setCurrencies = (Wallet: any) => ({
  type: currencies,
  payload: Wallet,
});

export const ADD_EXPENSE = 'Add_Expense';

export const addExpense = (expenses: any) => ({
  type: ADD_EXPENSE,
  payload: expenses,
});
