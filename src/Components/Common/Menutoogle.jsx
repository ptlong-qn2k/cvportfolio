import React, { useState, useEffect, useRef } from 'react';
import { header } from '../Content';
import { translations } from '../../Locals/LanguageContent';
import { IoMenu } from 'react-icons/io5';
import { useLanguage } from '../../Hook/Languagecontext';
import { useNavigate } from 'react-router-dom';
const Menutoogle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const { language } = useLanguage();
    const navigate = useNavigate();
    const goToPage = (path) => navigate(`/${[language]}/${path}`);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // console.log(isOpen);
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
        <div ref={menuRef} onClick={toggleMenu} className={`md:hidden`}>
            <div>
                <IoMenu size={32} className="cursor-pointer bg-gray-200 dark:bg-gray-700" />
            </div>
            {isOpen && (
                <div className="absolute left-0 right-0 top-full z-50 w-full rounded-md bg-white shadow-lg dark:bg-gray-800">
                    <ul className="flex flex-col text-black dark:text-white">
                        <li
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {
                                setIsOpen(false);
                                navigate('/');
                            }}
                        >
                            {translations[language].header.home}
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {
                                setIsOpen(false);
                                goToPage('about');
                            }}
                        >
                            {translations[language].header.about}
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {
                                setIsOpen(false);
                                goToPage('techstack');
                            }}
                        >
                            {translations[language].header.techstack}
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {
                                setIsOpen(false);
                                goToPage('project');
                            }}
                        >
                            {translations[language].header.projects}
                        </li>
                        <li
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {
                                setIsOpen(false);
                                goToPage('contact');
                            }}
                        >
                            {translations[language].header.contact}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Menutoogle;
