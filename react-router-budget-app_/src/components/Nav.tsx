import { HomeIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Form, NavLink } from 'react-router-dom';

export default function Nav({ userName }) {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <HomeIcon width={15}></HomeIcon>
        <span> Home Budget </span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!confirm('Delete user and all data?')) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Logout , {userName}</span>
            <TrashIcon width={15}></TrashIcon>
          </button>
        </Form>
      )}
    </nav>
  );
}
