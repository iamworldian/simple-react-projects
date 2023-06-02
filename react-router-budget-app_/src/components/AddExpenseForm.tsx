import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef, useState } from 'react';
import { useFetcher } from 'react-router-dom';

export default function AddExpenseForm({ budgets }) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === 'submitting';
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [xpense, setXpense] = useState(budgets ? budgets[0].name : '');
  console.log(xpense);
  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      inputRef.current.focus();
    }
  }, [isSubmitting]);
  return (
    <div className={`form-wrapper ${!budgets && 'blurred'}`}>
      <h2 className="h3">Add Expense Form</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <h2>{xpense}</h2>
          <label htmlFor="newXpense">Budget Category</label>
          <select
            name="budgetIndex"
            id="budgetIndex"
            required
            onChange={(e) => setXpense(budgets[e.target.value].name)}
          >
            {budgets &&
              budgets.map((budget, index) => {
                return (
                  <option value={index} key={index}>
                    {budget.name}
                    {/* {console.log('+', budget.name)} */}
                  </option>
                );
              })}
          </select>
          <label htmlFor="newXpense">Xpense Name</label>
          <input
            type="text"
            name="newXpense"
            id="newXpense"
            placeholder="e.g., Egg,Oil,Food"
            required
            ref={inputRef}
          />
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="text"
            name="newXpenseAmount"
            id="newXpenseAmount"
            placeholder="e.g., $350"
            required
            inputMode="decimal"
          />
          <input type="hidden" name="_action" value="createXpense" />
          <button className="btn btn--dark">
            Create Xpense
            <span>
              <CurrencyDollarIcon width={15}></CurrencyDollarIcon>
            </span>
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
}
