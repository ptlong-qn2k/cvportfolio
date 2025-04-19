import React from 'react';
import './Styles/App.css';
import Header from './Components/Header';
import Component1 from './Components/Component1';
import { useState } from 'react';
import Footer from './Components/Footer';

export const Homepage = () => {
    return (
        <div className="w-full text-black min-h-screen px-5 bg-soft-gradient dark:bg-gray-900 dark:text-white">
            <Header />
            <Component1 />
            <Footer />
        </div>
    );
};
