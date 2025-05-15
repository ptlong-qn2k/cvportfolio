import React from 'react';
import './Styles/App.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useLanguage } from './Hook/Languagecontext';
import { translations } from './Locals/LanguageContent';
import Layout from './Layout/Layout';
import { MdCloudDownload } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const Homepage = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const gotopage = (page) => {
        navigate(`/${language}/${page}`);
    };

    return (
        <Layout>
            <div className="flex flex-col text-lg">
                <div className="mx-auto flex flex-col items-center pt-10 font-bold sm:flex-row sm:gap-10 sm:px-5">
                    <img
                        src="/images/background/long.png"
                        className="hieuung1 bg-image-gradient max-h-[250px] min-h-[200px] min-w-[200px] max-w-[250px] overflow-hidden rounded-[50%] p-2"
                    />

                    <div className="animate-fade-in flex flex-col items-center py-2 sm:items-start">
                        <div className="flex flex-col text-center uppercase sm:mb-2 sm:text-left">
                            <span className="hidden sm:flex">{translations[language].home.title}</span>
                            <span className="text-maupurple sm:whitespace-nowrap">
                                {translations[language].home.name}
                            </span>
                            <span className="min-w-[220px] max-w-[250px] text-maucam sm:max-w-full">
                                {translations[language].home.description}
                            </span>
                        </div>
                        <a
                            className="animate-fade-in float-start mb-2 flex cursor-pointer items-center justify-center whitespace-nowrap rounded-xl bg-slate-500 p-1 text-sm text-black sm:float-start"
                            href="/CV_Pham_Thanh_Long.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdCloudDownload size={20} className="mr-1" />
                            {translations[language].home.buttoncv}
                        </a>
                        <div className="space-x-3 text-sm">
                            <button
                                className="card-hover rounded-lg bg-gradient-to-r from-cyan-400 to-blue-800 p-1"
                                onClick={() => gotopage('project')}
                            >
                                {translations[language].home.buttonproject}
                            </button>
                            <button
                                className="card-hover rounded-lg bg-gradient-to-r from-cyan-400 to-blue-800 p-1"
                                onClick={() => gotopage('contact')}
                            >
                                {translations[language].home.buttoncontact}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex flex-col sm:mt-10 sm:flex-row sm:justify-start">
                    <div className="mr-2 flex flex-row items-center md:mr-12">
                        <FaPhoneAlt style={{ width: '30px', height: '30px', margin: '0 10px' }} />
                        <span>+84328228798</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <HiOutlineMail style={{ width: '30px', height: '30px', margin: '0 10px' }} />
                        <span>Thanhlong05.06.2k@gmail.com</span>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
