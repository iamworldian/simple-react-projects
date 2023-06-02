import { useLoaderData, useParams } from 'react-router-dom';

import BudgetItem from '../components/BudgetItem';
import ExpenseTable from '../components/ExpenseTable';
import { deleteExpense, fetchData } from '../helpers';

export const budgetPageLoader = ({ params }) => {
  const id = parseInt(params.id);
  const data = fetchData('budgets');
  //console.log(data[id]);
  return data[id];
};

export const budgetAction = async ({ request }) => {
  const data = await request.formData();
  const _action = data.get('_action');
  console.log(data.get('_action'));

  if (_action === 'deleteExpense') {
    try {
      const expenseIndex = data.get('expenseIndex');
      const budgetIndex = data.get('budgetIndex');
      console.log(expenseIndex, budgetIndex);
      deleteExpense(expenseIndex, budgetIndex);
    } catch (err) {
      throw new Error('Delete Expense Error');
    }
  }

  return null;
};
export default function BudgetPage() {
  const data: any = useLoaderData();
  const params = useParams();

  return (
    <div className="grid-lg">
      <BudgetItem budget={data} index={null} />
      <ExpenseTable expenses={data.expenses} index={params.id}></ExpenseTable>
    </div>
  );
}
