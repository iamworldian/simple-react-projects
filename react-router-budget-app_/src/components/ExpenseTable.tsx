import { TrashIcon } from '@heroicons/react/24/solid';
import { Form } from 'react-router-dom';
export default function ExpenseTable({ expenses, index }) {
  console.log('index', parseInt(index));
  const budgetIndex = index;
  return (
    <div className="grid-xs">
      <h2>Expenses</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
        {expenses.length > 0 &&
          expenses.map((expense, index) => {
            return (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{new Date(parseInt(expense.createdAt)).toDateString()}</td>
                <td>
                  <Form method="post">
                    <input type="hidden" value="deleteExpense" name="_action" />
                    <input
                      type="hidden"
                      value={parseInt(budgetIndex)}
                      name="budgetIndex"
                    />
                    <input type="hidden" value={index} name="expenseIndex" />
                    <button className="btn" type="submit">
                      <TrashIcon width={20}></TrashIcon>
                    </button>
                  </Form>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
