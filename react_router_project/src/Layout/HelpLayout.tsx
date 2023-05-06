import { NavLink, Outlet } from 'react-router-dom';

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Help Page</h2>
            <p>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tempora
                cumque exercitationem amet a obcaecati saepe soluta deserunt placeat?
                Obcaecati numquam totam nam aut saepe cum temporibus recusandae, beatae
                et?{' '}
            </p>

            <nav>
                <NavLink to="faq"> View the FAQ </NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>

            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
}
