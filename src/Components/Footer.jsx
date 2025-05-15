import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../Hook/Languagecontext';
import { translations } from '../Locals/LanguageContent';
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
            <div className="mx-auto max-w-6xl">
                <div className="mt-5 grid grid-cols-3 gap-5 border-b-[1px] border-t-[1px] border-gray-600 py-10 dark:border-gray-400">
                    <div>
                        <h3 className="font-bold">{translations[language].header.about}</h3>
                        <p>{translations[language].home.contentabout}</p>
                    </div>
                    <div className="font-bold">
                        <h3>{translations[language].header.navigation[0]}</h3>
                        <div className="flex-col items-start justify-center gap-x-5 whitespace-nowrap md:flex">
                            <h3
                                onClick={() => navigate('/')}
                                className={`card-hover cursor-pointer px-[4px] py-[2px] ${
                                    location.pathname === '/' ? 'menu-active' : 'text-maudo'
                                }`}
                            >
                                {translations[language].header.home}
                            </h3>
                            <h3
                                onClick={() => goToPage('about')}
                                className={`card-hover cursor-pointer px-[4px] py-[2px] ${
                                    location.pathname === '/about' ? 'menu-active' : 'text-xanhduong'
                                }`}
                            >
                                {translations[language].header.about}
                            </h3>
                            <h3
                                onClick={() => goToPage('techstack')}
                                className={`card-hover cursor-pointer px-[4px] py-[2px] ${
                                    location.pathname === '/techstack' ? 'menu-active' : 'text-mauvang'
                                }`}
                            >
                                {translations[language].header.techstack}
                            </h3>
                            <h3
                                onClick={() => goToPage('project')}
                                className={`card-hover cursor-pointer px-[4px] py-[2px] ${
                                    location.pathname === '/project' ? 'menu-active' : 'text-maucam'
                                }`}
                            >
                                {translations[language].header.projects}
                            </h3>
                            <h3
                                onClick={() => goToPage('contact')}
                                className={`card-hover cursor-pointer px-[4px] py-[2px] ${
                                    location.pathname === '/contact' ? 'menu-active' : 'text-xanhla'
                                }`}
                            >
                                {translations[language].header.contact}
                            </h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold">{translations[language].header.navigation[1]}</h3>
                        <div className="flex cursor-pointer flex-row justify-start gap-2">
                            <FaFacebook
                                onClick={() => myFb('https://www.facebook.com/mrlong2k/')}
                                className="card-hover h-8 w-8"
                            />
                            <FaGithubSquare
                                onClick={() => myGithub('https://github.com/ptlong-qn2k')}
                                className="card-hover h-8 w-8"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between pb-5">
                    <div className="flex flex-col md:flex-row">
                        <p>2025 cv @Portfolio</p>
                        <p>Pham Thanh Long</p>
                    </div>
                    <div className="flex flex-col items-center justify-between sm:gap-3 md:flex-row">
                        <p className="flex flex-row whitespace-nowrap">
                            Front-end Developer <span className="hidden pl-2 md:block">|</span>{' '}
                        </p>
                        <p className="whitespace-nowrap">Da Nang, Vietnam</p>
                        <img
                            src={'/images/header/vn.png'}
                            className="hidden md:block md:h-6"
                            alt=""
                            onClick={() =>
                                window.open(
                                    'https://baochinhphu.vn/thu-tuong-nam-2025-du-kien-quy-mo-kinh-te-viet-nam-tren-500-ty-usd-102250505112210409.htm',
                                    'blank',
                                )
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
