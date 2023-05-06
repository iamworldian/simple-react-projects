import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import CareersLayout from './Layout/CareersLayout';
import HelpLayout from './Layout/HelpLayout';
import RootLayout from './Layout/RootLayout';
import About from './pages/About';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerError from './pages/careers/CareersError';
import Contact, { contactAction } from './pages/help/Contact';
import Faq from './pages/help/Faq';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/help" element={<HelpLayout />}>
                <Route path="faq" element={<Faq />}></Route>
                <Route
                    path="contact"
                    element={<Contact />}
                    action={contactAction}
                ></Route>
            </Route>
            <Route
                path="careers"
                element={<CareersLayout />}
                errorElement={<CareerError />}
            >
                <Route index element={<Careers />} loader={careersLoader} />
                <Route
                    path=":id"
                    element={<CareerDetails />}
                    loader={careerDetailsLoader}
                />
            </Route>

            <Route path="*" element={<NotFound />}></Route>
        </Route>,
    ),
);
function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
