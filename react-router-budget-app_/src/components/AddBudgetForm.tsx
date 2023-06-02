import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from 'react';
import { useFetcher } from 'react-router-dom';
export default function AddBudgetForm() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === 'submitting';
  const formRef = useRef<HTMLFormElement>(null);
  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
            ref={focusRef}
          />
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="text"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., $350"
            required
            inputMode="decimal"
          />
          <input type="hidden" name="_action" value="createBudget" />
          <button className="btn btn--dark">
            Create Budget
            <span>
              <CurrencyDollarIcon width={15}></CurrencyDollarIcon>
            </span>
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
}
