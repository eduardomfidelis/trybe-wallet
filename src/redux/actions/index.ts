// Coloque aqui suas actions
export const SaveEmail = 'Save_Email';

export const submitLogin = (userData: any) => ({
  type: SaveEmail,
  payload: userData,
});
