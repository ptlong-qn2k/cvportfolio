import React, { useState, useEffect, useRef } from 'react';
import { header } from '../Components/Content';
import { IoMenu } from 'react-icons/io5';
import { useLanguage } from './Languagecontext';
import { BiPointer } from 'react-icons/bi';

const Menutoogle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const { language } = useLanguage();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="">
            <div onClick={toggleMenu} className={`sm:hidden ${isOpen ? 'hidden' : ''}`}>
                <IoMenu size={40} className="cursor-pointer" />
            </div>
            {isOpen && (
                <div
                    ref={menuRef}
                    className="absolute top-full left-0 right-0 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 z-50"
                >
                    <ul className="flex flex-col text-black dark:text-white">
                        <li
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            {header[language].home}
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            {header[language].about}
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            {header[language].techStack}
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            {header[language].projects}
                        </li>
                        <li
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            {header[language].contact}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Menutoogle;
