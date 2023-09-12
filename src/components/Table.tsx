import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/actions';

function Table() {
  const expenses = useSelector((state: any) => state.wallet.expenses);
  const dispatch = useDispatch();
  const [totalBRL, setTotalBRL] = useState(0);

  const handleDeleteExpense = (expenseId: number) => {
    const expenseIndex = expenses.findIndex((expense: any) => expense.id === expenseId);

    if (expenseIndex !== -1) {
      const updatedExpenses = [...expenses];
      const deletedExpense = updatedExpenses.splice(expenseIndex, 1)[0];

      dispatch(deleteExpense(deletedExpense));

      const updatedTotal = totalBRL - deletedExpense.valueInBRL;
      setTotalBRL(updatedTotal);
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense: any) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{parseFloat(expense.value).toFixed(2)}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>
                {parseFloat(expense.exchangeRates[expense.currency].ask)
                  .toFixed(2)}

              </td>
              <td>
                {(parseFloat(expense.value)
                * parseFloat(expense.exchangeRates[expense.currency].ask))
                  .toFixed(2)}

              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  onClick={ () => handleDeleteExpense(expense.id) }
                >
                  Editar/Excluir
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
