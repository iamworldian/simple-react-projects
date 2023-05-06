import { NavLink, Outlet } from 'react-router-dom';

import BreadCrumb from '../Components/BreadCrumbs';

export default function RootLayout() {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="/about"> About </NavLink>
                    <NavLink to="/help"> Help </NavLink>
                    <NavLink to="/careers"> Careers </NavLink>
                </nav>
            </header>
            <BreadCrumb></BreadCrumb>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
}
