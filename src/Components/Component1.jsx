import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useLanguage } from '../Service/Languagecontext';
import { translations } from './Content';

export default function Component1() {
    const { language } = useLanguage();
    return (
        <div className="flex flex-col text-lg font-bold pt-[60px]">
            <div className="flex flex-col items-center sm:flex-row mx-auto sm:px-5 pt-10  ">
                <img src="/images/background/long.png" className="w-[250px] h-[250px] sm:mr-10" />
                <div className="flex flex-col uppercase  ">
                    <span className="hidden sm:flex">{translations[language].home.title}</span>
                    <span className="sm:whitespace-nowrap text-maupurple">{translations[language].home.name}</span>
                    <span className="text-maucam ">{translations[language].home.description}</span>
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
    );
}
