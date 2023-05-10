import { Outlet, useLoaderData } from 'react-router-dom';

import footerImage from '../assets/wave.svg';
import Nav from '../components/Nav';
import { fetchData } from '../helpers';

export function mainLoader() {
  try {
    const userName = fetchData('userName');

    return userName;
  } catch (error) {
    console.log(error);
  }
}

export default function Main() {
  const username = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={username}></Nav>
      <main>
        <Outlet></Outlet>
      </main>
      <img src={footerImage} alt="" />
    </div>
  );
}
