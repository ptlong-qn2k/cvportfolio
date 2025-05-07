import React from 'react';
import './Styles/App.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useLanguage } from './Hook/Languagecontext';
import { translations } from './Locals/LanguageContent';
import Layout from './Layout/Layout';
import { MdCloudDownload } from 'react-icons/md';

export const Homepage = () => {
    const { language } = useLanguage();

    return (
        <Layout>
            <div className="flex flex-col text-lg font-bold">
                <div className="flex flex-col items-center sm:flex-row mx-auto sm:px-5 pt-10  ">
                    <img src="/images/background/long.png" className="w-[250px] h-[250px] sm:mr-10 hieuung1 " />
                    <div className="py-2 flex flex-col items-center sm:items-start ">
                        <div className="flex flex-col text-center sm:text-left uppercase sm:mb-2 animate-fade-in ">
                            <span className="hidden sm:flex ">{translations[language].home.title}</span>
                            <span className="sm:whitespace-nowrap text-maupurple ">
                                {translations[language].home.name}
                            </span>
                            <span className="text-maucam max-w-[250px] sm:max-w-full min-w-[250px]">
                                {translations[language].home.description}
                            </span>
                        </div>
                        <a
                            className="text-black rounded-xl flex  bg-slate-500 justify-center items-center float-start sm:float-start text-sm whitespace-nowrap cursor-pointer animate-fade-in "
                            href="/CV_Pham_Thanh_Long.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdCloudDownload size={20} className="mr-1" />
                            {translations[language].home.buttoncv}
                        </a>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-start mx-auto sm:mt-10">
                    <div className="flex flex-row items-center mr-2 md:mr-12">
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
