// rrd imports
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

import AddBudgetForm from '../components/AddBudgetForm';
import AddExpenseForm from '../components/AddExpenseForm';
import BudgetItem from '../components/BudgetItem';
import Intro from '../components/Intro';
//  helper functions
import { addNewExpenseToBudgets, createNewBudget, fetchData } from '../helpers';

// loader
export function dashboardLoader() {
  const userName = fetchData('userName');
  const budgets = fetchData('budgets');
  console.log(userName);
  return { userName, budgets };
}

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const action = data.get('_action');
  if (action == 'createUser') {
    try {
      const userName = data.get('userName');
      localStorage.setItem('userName', JSON.stringify(userName));
      return toast.success('User Added');
    } catch (error) {
      console.log(error);
    }
  }

  if (action == 'createBudget') {
    try {
      const newBudgetName = data.get('newBudget');
      const newBudgetAmount = data.get('newBudgetAmount');
      createNewBudget({ name: newBudgetName, amount: newBudgetAmount });

      return toast.success('New Budget Created');
    } catch (error) {
      console.log(error);
    }
  }

  if (action == 'createXpense') {
    try {
      const newXpense = data.get('newXpense');
      const newXpenseAmount = data.get('newXpenseAmount');
      const budgetIndex = data.get('budgetIndex');
      addNewExpenseToBudgets({ newXpense, newXpenseAmount, budgetIndex });
      return toast.success('New Budget Created');
    } catch (error) {
      console.log(error);
    }
  }
}

const Dashboard = () => {
  const { userName, budgets }: any = useLoaderData();

  return (
    <div>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
                <AddExpenseForm budgets={budgets} />
                <h2> Existing Budgets </h2>
                <br />
                {budgets &&
                  budgets.map((budget, index) => {
                    return (
                      <BudgetItem key={index} budget={budget} index={index}></BudgetItem>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro></Intro>
      )}
    </div>
  );
};
export default Dashboard;
