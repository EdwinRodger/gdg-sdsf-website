import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';

// Components for pages
const Events = () => <h1 className='text-center mt-5'>Events Page</h1>;
const Flashback = () => <h1 className='text-center mt-5'>Flashback Page</h1>;
const Achievements = () => <h1 className='text-center mt-5'>Achievements Page</h1>;
const Team = () => <h1 className='text-center mt-5'>Team Page</h1>;
const ContactUs = () => <h1 className='text-center mt-5'>Contact Us Page</h1>;

function App() {
    return (
        <div>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/flashback" element={<Flashback />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="*" element={<h1 className='text-center mt-5'>404: Page Not Found</h1>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App
