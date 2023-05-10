import { UserPlusIcon } from '@heroicons/react/24/solid';
import { Form } from 'react-router-dom';

import illustration from '../assets/illustration.jpg';

export default function Intro() {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of<span className="accent"> Your Money</span>
        </h1>
        <p> Personal Budgeting is </p>
        <Form method="post">
          <input type="text" placeholder="username" required name="userName" />
          <input type="hidden" name="_action" value="createUser" />
          <button type="submit" className="btn btn--dark">
            Create Account{' '}
            <span>
              <UserPlusIcon width={20} />
            </span>
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
}
