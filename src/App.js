import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ContactUsPage from './pages/contactUsPage';
import HomePage from './pages/homePage'; // Create this page
import AboutUsPage from './pages/aboutUsPage'; // Create this page
import ServicesPage from './pages/servicesPage'; // Create this page
import './style.css';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
        </Router>
    );
}

export default App;


