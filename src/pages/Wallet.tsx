import { useSelector } from 'react-redux';

function Wallet() {
  const email = useSelector((state: any) => state.user.email);
  return (
    <div>
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    </div>
  );
}

export default Wallet;
