import React from 'react';
import './Styles/App.css';
import Header from './Components/Header';
import Component1 from './Components/Component1';

export const Homepage = () => {
    return (
        <div className="w-full h-screen background">
            <Header />
            <Component1 />
        </div>
    );
};
