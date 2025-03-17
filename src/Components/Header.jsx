import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

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
    return (
        <>
            <div className=" w-full px-5 flex flex-row justify-between items-center">
                <img src="/images/header/meIcon.png" alt="" />
                <div className="w-[70%] flex flex-row justify-between items-center text-2xl ">
                    <h3 onClick={() => navigate('/')} className="cursor-pointer text-primary">
                        Home
                    </h3>
                    <h3 onClick={aboutpage} className="cursor-pointer text-blue">
                        About
                    </h3>
                    <h3 onClick={() => navigate('/techstack')} className="cursor-pointer text-yellow">
                        Tech Stack
                    </h3>
                    <h3 onClick={() => navigate('/project')} className="cursor-pointer text-orange">
                        Projects
                    </h3>
                    <h3 onClick={() => navigate('/contact')} className="cursor-pointer text-green">
                        Contact
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
