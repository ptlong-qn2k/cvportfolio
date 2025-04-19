import React from 'react';
import '../Styles/App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Layout({ children }) {
    return (
        <div className="w-full text-black min-h-screen px-5 bg-soft-gradient dark:bg-gray-900 dark:text-white">
            <Header />
            <div className=" pt-[60px]">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
