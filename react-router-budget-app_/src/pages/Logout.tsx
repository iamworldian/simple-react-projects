import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { deleteItem } from '../helpers';

export default function Logout() {
  return <p> Logged Out </p>;
}

export async function logoutAction() {
  deleteItem('userName');
  toast.success('Logged out User');
  return redirect('/');
}
