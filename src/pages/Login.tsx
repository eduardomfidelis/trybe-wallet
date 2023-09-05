import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { submitLogin } from '../redux/actions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navegate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateForm();
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validateForm();
  };
  const validateForm = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 5;

    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(submitLogin(email));
    console.log(email);

    navegate('/carteira');
  };
  return (
    <div>
      Login
      <form>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ handleEmailChange }
        />
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ handlePasswordChange }
          data-testid="password-input"
        />
        <button
          disabled={ isButtonDisabled }
          onClick={ handleLogin }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
