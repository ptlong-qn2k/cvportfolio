import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './Languagecontext';
import { header } from './Content';
function Header() {
    const myFb = () => {
        window.open('https://www.facebook.com/mrlong2k/', '_blank');
    };
    const myGithub = () => {
        window.open('https://github.com/ptlong-qn2k', '_blank');
    };

    const navigate = useNavigate();
    const aboutpage = () => {
        console.log('da nhan nut');

        navigate('/about');
    };
    const { language, toggleLanguage } = useLanguage();

    return (
        <>
            <div className=" w-full px-5 flex flex-row items-center justify-between text-2xl font-bold">
                <div className="flex flex-row items-center justify-between gap-x-5 mr-20 ">
                    <img onClick={() => navigate('/login')} src="/images/header/meIcon.png" alt="" />
                    <div className="flex flex-row justify-center text-xl py-5 text-nowrap">
                        <button onClick={() => toggleLanguage('en')} className="">
                            English
                        </button>
                        <button onClick={() => toggleLanguage('vi')} style={{ marginLeft: '20px' }}>
                            Tiếng Việt
                        </button>{' '}
                    </div>
                </div>
                <div className=" flex flex-row justify-center items-center gap-x-10 text-nowrap ">
                    <h3 onClick={() => navigate('/')} className="cursor-pointer text-maudo">
                        {header[language].home}
                    </h3>
                    <h3 onClick={aboutpage} className="cursor-pointer text-xanhduong">
                        {header[language].about}
                    </h3>
                    <h3 onClick={() => navigate('/techstack')} className="cursor-pointer text-mauvang">
                        {header[language].techStack}
                    </h3>
                    <h3 onClick={() => navigate('/project')} className="cursor-pointer text-maucam">
                        {header[language].projects}
                    </h3>
                    <h3 onClick={() => navigate('/contact')} className="cursor-pointer text-xanhla">
                        {header[language].contact}
                    </h3>
                    <div className="cursor-pointer w-[100px] flex flex-row justify-between">
                        <FaFacebook onClick={myFb} />
                        <FaGithubSquare onClick={myGithub} />
                        <SiGmail />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
