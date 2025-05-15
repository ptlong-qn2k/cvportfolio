import React from 'react';
import '../Styles/App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Layout({ children }) {
    return (
        <div className="bg-soft-gradient min-h-screen w-full px-5 text-black dark:bg-gray-900 dark:text-white">
            <Header />
            <div className="flex flex-col items-center justify-center pt-[60px]">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
