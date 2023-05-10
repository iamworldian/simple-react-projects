import { Link } from 'react-router-dom';

const BudgetItem = ({ budget, index }) => {
  const { id, name, amount, color, expenses } = budget;

  const spent = expenses.reduce((total, curr) => {
    return total + parseInt(curr.amount);
  }, 0);
 
  return (
    <div
      className="budget"
      style={{
        '--accent': color,
      }}
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p> {amount} Budget</p>
      </div>
      <progress max={amount} value={spent}></progress>
      <div className="progress-text">
        <small> {spent} spent</small>
        <small> {amount - spent} remaining</small>
      </div>
      {index != null && (
        <div className="flex-sm">
          <Link to={`/budget/${index}`} className="btn">
            <span>View Details</span>
          </Link>
        </div>
      )}
    </div>
  );
};
export default BudgetItem;
