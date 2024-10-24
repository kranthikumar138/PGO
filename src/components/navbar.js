import React from 'react';
import { Link } from 'react-router-dom'; // If using react-router for navigation

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.brand}>
                <h2>Company Name</h2>
            </div>
            <ul style={styles.navLinks}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/about" style={styles.navLink}>About Us</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/services" style={styles.navLink}>Services</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/contact" style={styles.navLink}>Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#333',
        color: '#fff',
    },
    brand: {
        fontSize: '1.5rem',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '1rem',
    },
    navItem: {
        fontSize: '1.1rem',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
    },
};

export default Navbar;
