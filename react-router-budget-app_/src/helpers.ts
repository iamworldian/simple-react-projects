export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const deleteItem = (key) => {
  return localStorage.removeItem(key);
};

const generateRandomColor = () => {
  const existingBudgets = fetchData('budgets')?.length ?? 0;
  return `${existingBudgets * 34} 65% 50%`;
};
export const createNewBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    amount: amount,
    createdAt: Date.now(),
    expenses: [],
    color: generateRandomColor(),
  };

  const existingBudgets = fetchData('budgets') ?? [];
  return localStorage.setItem('budgets', JSON.stringify([...existingBudgets, newItem]));
};

export const addNewExpenseToBudgets = ({ newXpense, newXpenseAmount, budgetIndex }) => {
  const newExpense = {
    id: crypto.randomUUID(),
    name: newXpense,
    amount: newXpenseAmount,
    createdAt: Date.now(),
  };

  const existingBudgets = fetchData('budgets');
  existingBudgets[budgetIndex].expenses.push(newExpense);
  return localStorage.setItem('budgets', JSON.stringify(existingBudgets));
};

export const deleteExpense = (expenseIndex, budgetIndex) => {
  const existingBudgets = fetchData('budgets');
  existingBudgets[budgetIndex].expenses = existingBudgets[budgetIndex].expenses.filter(
    (ex, index) => index != expenseIndex,
  );
  return localStorage.setItem('budgets', JSON.stringify(existingBudgets));
};
