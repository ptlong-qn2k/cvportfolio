import React from 'react';
import '../Styles/App.css';
import Header from '../Components/Header';

function Layout({ children }) {
    return (
        <div className="w-full h-screen background">
            <Header />
            <div>{children}</div>
        </div>
    );
}

export default Layout;
