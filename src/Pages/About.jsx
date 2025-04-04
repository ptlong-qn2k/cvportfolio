import Layout from './Layout';
import { useLanguage } from '../Components/Languagecontext';
import { translations } from '../Components/Content';

const About = () => {
    const home = {
        en: {
            title: 'Hi 👋, My name is',
            name: 'Pham Thanh Long,',
            description: 'a Front-end Developer specializing in ReactJS',
        },
        vi: {
            title: 'Xin chào 👋, Tôi tên là',
            name: 'Phạm Thanh Long,',
            description: 'một Nhà phát triển Front-end chuyên về ReactJS',
        },
    };
    const { language } = useLanguage();
    return (
        <Layout>
            <div className="flex flex-col justify-center px-[200px] pt-[10px] text-2xl">
                <div className="">
                    <label htmlFor="BACKGROUND/CAREER OBJECTIVES" className="relative right-10">
                        {translations[language].about.background.label}
                    </label>
                    {translations?.[language]?.about?.background?.content?.map((paragraph, index) => (
                        <p key={index} className="indent-10">
                            {paragraph}
                        </p>
                    ))}
                    {/* {translations[language].about.background.content.map((paragraph, index) => (
                        <p key={index} className="indent-10">
                            {paragraph}
                        </p>
                    ))} */}
                </div>
                <div className="flex flex-row relative right-10">
                    <label htmlFor="Education" className="uppercase">
                        {translations[language].about.education.label}
                    </label>
                    <h3 className="">{translations[language].about.education.content}</h3>
                </div>
                <div className="flex flex-row relative right-10">
                    <label htmlFor="Work experience" className="uppercase ">
                        {translations[language].about.experience.label}{' '}
                    </label>
                    <h3></h3>
                </div>
            </div>
        </Layout>
    );
};
export default About;
