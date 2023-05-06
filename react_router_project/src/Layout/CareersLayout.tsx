import { Outlet } from 'react-router-dom';
export default function CareersLayout() {
    return (
        <div className="careers-layout">
            <h2>Careers Page</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum modi
                quam minus error non harum animi maxime deserunt repellendus, vero soluta
                nemo, sequi, repellat iusto consequatur ea inventore facilis iure.
            </p>

            <Outlet/>
        </div>
    );
}
