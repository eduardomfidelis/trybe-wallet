import { useSelector } from 'react-redux';

function Header() {
  const email = useSelector((state: any) => state.user.email);
  const expenses = useSelector((state: any) => state.wallet.expenses);

  const totalBRL = expenses
    .reduce((total: any, expense: any) => total + expense.valueInBRL, 0);

  return (
    <div>
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{totalBRL.toFixed(2)}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    </div>
  );
}

export default Header;
