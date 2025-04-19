import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../Service/Languagecontext';
import { header } from './Content';
import { Menu, MenuItem, Button, ListItemIcon, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThemeToggle from '../Service/Themetoggle';
import Header from './Header';
import { translations } from './Content';
const Footer = () => {
    const { language } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const myFb = (url) => {
        window.open(url, '_blank');
    };
    const myGithub = (url) => {
        window.open(url, '_blank');
    };
    const goToPage = (page) => navigate(`/${language}/${page}`);

    return (
        <>
            <div className="grid grid-cols-3 gap-5 mt-5 py-10 ">
                <div>
                    <h3 className="font-bold">{header[language].about}</h3>
                    <p>{translations[language].home.contentabout}</p>
                </div>
                <div className="font-bold">
                    <h3>{header[language].navigation[0]}</h3>
                    <div className="md:flex flex-col justify-center items-start gap-x-5 whitespace-nowrap ">
                        <h3
                            onClick={() => navigate('/')}
                            className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                location.pathname === '/' ? 'menu-active' : 'text-maudo'
                            }`}
                        >
                            {header[language].home}
                        </h3>
                        <h3
                            onClick={() => goToPage('about')}
                            className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                location.pathname === '/about' ? 'menu-active' : 'text-xanhduong'
                            }`}
                        >
                            {header[language].about}
                        </h3>
                        <h3
                            onClick={() => goToPage('techstack')}
                            className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                location.pathname === '/techstack' ? 'menu-active' : 'text-mauvang'
                            }`}
                        >
                            {header[language].techStack}
                        </h3>
                        <h3
                            onClick={() => goToPage('project')}
                            className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                location.pathname === '/project' ? 'menu-active' : 'text-maucam'
                            }`}
                        >
                            {header[language].projects}
                        </h3>
                        <h3
                            onClick={() => goToPage('contact')}
                            className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                location.pathname === '/contact' ? 'menu-active' : 'text-xanhla'
                            }`}
                        >
                            {header[language].contact}
                        </h3>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold">{header[language].navigation[1]}</h3>
                    <div className="cursor-pointer gap-2 flex flex-row justify-start">
                        <FaFacebook
                            onClick={() => myFb('https://www.facebook.com/mrlong2k/')}
                            className="w-8 h-8 card-hover"
                        />
                        <FaGithubSquare
                            onClick={() => myGithub('https://github.com/ptlong-qn2k')}
                            className="w-8 h-8 card-hover"
                        />
                    </div>
                </div>
            </div>
            <hr className=" border-black w-full mx-auto mb-5" />
            <div className="flex flex-row justify-between items-center pb-5">
                <p>2025 cv @Portfolio Pham Thanh Long</p>
                <div className="flex flex-row justify-between items-center gap-3">
                    Front-end Developer | Da Nang, Vietnam
                    <img src={'/images/header/vn.png'} className="h-6 hidden sm:block" alt="" />
                </div>
            </div>
        </>
    );
};
export default Footer;
