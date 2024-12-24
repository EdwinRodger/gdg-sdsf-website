import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './home/Home';
import Events from './events/Events';
import Flashback from './flashback/Flashback';
import Team from './team/Team';
import ContactUs from './contact-us/ContactUs';

function App() {
    return (
        <div>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/flashback" element={<Flashback />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="*" element={<h1 className='text-center mt-5'>404: Page Not Found</h1>} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App
