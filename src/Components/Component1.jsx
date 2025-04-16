import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useLanguage } from '../Service/Languagecontext';
import { translations } from './Content';

export default function Component1() {
    const { language } = useLanguage();
    return (
        <div className="flex flex-col text-xl font-bold pt-[60px]">
            <div className="flex flex-row mx-auto px-5 items-center pt-10  ">
                <img src="/images/background/long.png" className="w-[250px] h-[250px] mr-10" />
                <div className="flex flex-col uppercase w-[550px]  ">
                    <span>{translations[language].home.title}</span>
                    <span className="text-orange whitespace-nowrap text-maupurple">
                        {translations[language].home.name}
                    </span>
                    <span className="text-maucam ">{translations[language].home.description}</span>
                </div>
            </div>
            <div className="flex flex-row mx-auto mt-10">
                <div className="flex flex-row items-center mr-12">
                    <FaPhoneAlt style={{ width: '30px', height: '30px', margin: '0 20px' }} />
                    <span>+84328228798</span>
                </div>
                <div className="flex flex-row items-center">
                    <HiOutlineMail style={{ width: '30px', height: '30px', margin: '0 20px' }} />
                    <span>Thanhlong05.06.2k@gmail.com</span>
                </div>
            </div>
        </div>
    );
}
