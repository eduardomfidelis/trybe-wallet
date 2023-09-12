import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCurrencies, addExpense } from '../redux/actions';

function WalletForm() {
  const dispatch = useDispatch();
  const currencies = useSelector((state: any) => state.wallet.currencies);
  const [formValue, setFormValue] = useState({
    value: '',
    description: '',
    method: 'Dinheiro',
    tag: 'Alimentação',
    currency: 'USD',
  });
  const [expenseId, setExpenseId] = useState(0);
  useEffect(() => {
    async function fetchCurrencies() {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();

      const currencieArray = Object.keys(data)
        .filter((currencie) => currencie !== 'USDT');

      dispatch(setCurrencies(currencieArray));
    }
    fetchCurrencies();
  }, [dispatch]);

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleCurrencyChange = (event: any) => {
    const { value } = event.target;
    setFormValue({
      ...formValue,
      currency: value,
    });
  };
  const handleTagChange = (event: any) => {
    const { value } = event.target;
    setFormValue({
      ...formValue,
      tag: value,
    });
  }; const handleMethodChange = (event: any) => {
    const { value } = event.target;
    setFormValue({
      ...formValue,
      method: value,
    });
  };

  const handleAddExpenses = async () => {
    const { value, description, currency, method, tag } = formValue;

    const response = await fetch('https://economia.awesomeapi.com.br/json/all');

    const data = await response.json();
    // console.log(data);

    // const Ask = data[currency].ask;
    const currentExchangeRate = data;

    const newExpense = {
      id: expenseId,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currentExchangeRate,
    };

    setExpenseId(expenseId + 1);

    dispatch(addExpense(newExpense));

    setFormValue({
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    });
  };

  return (
    <div>
      <label htmlFor="value">Valor</label>
      <input
        id="value"
        name="value"
        type="text"
        data-testid="value-input"
        value={ formValue.value }
        onChange={ handleInputChange }
      />

      <label htmlFor="descriçao">Descriçao</label>
      <input
        type="text"
        name="description"
        data-testid="description-input"
        id="descriçao"
        value={ formValue.description }
        onChange={ handleInputChange }
      />

      <label htmlFor="currency">Moeda</label>
      <select
        name="currency"
        id="currency"
        data-testid="currency-input"
        value={ formValue.currency }
        onChange={ handleCurrencyChange }
      >
        {currencies.map((currency: any) => (
          <option
            key={ currency }
            value={ currency }
          >
            {currency}

          </option>
        ))}
      </select>

      <label htmlFor="method">Métodode pagamento</label>
      <select
        name="method"
        id="method"
        data-testid="method-input"
        value={ formValue.method }
        onChange={ handleMethodChange }
      >
        <option value="dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>

      <label htmlFor="tag">Categoria</label>
      <select
        name="tag"
        id="tag"
        value={ formValue.tag }
        onChange={ handleTagChange }
        data-testid="tag-input"
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>

      </select>

      <button onClick={ handleAddExpenses }>Adicionar despesa</button>
    </div>
  );
}

export default WalletForm;
