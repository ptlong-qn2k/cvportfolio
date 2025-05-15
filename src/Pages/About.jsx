import Layout from '../Layout/Layout';
import { useLanguage } from '../Hook/Languagecontext';
import { translations } from '../Locals/LanguageContent';

const About = () => {
    const { language } = useLanguage();
    // console.log('lang', language);

    return (
        <Layout>
            <div className="w-full max-w-5xl justify-center pt-[10px]">
                <div className="px-5 text-center">
                    <h2 className="gradient-text text-4xl font-bold">{translations[language].header.about}</h2>
                    <p>{translations[language].about.background.header}</p>
                </div>
                <div className="mb-8 rounded-2xl bg-white p-5 dark:bg-gray-800 md:flex md:flex-row">
                    <div className="relative mobile:h-64 mobile:min-w-64 md:h-72 md:min-w-72">
                        <img src="/images/background/ptl.png" alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="">
                        <div className="p-2 md:pl-5">
                            <h3 className="text-xl font-bold text-xanhduong">
                                {translations[language].about.background.apply}
                            </h3>
                            <h3 className="text-3xl font-bold">{translations[language].home.name}</h3>
                            <h3>{translations[language].about.background.address}</h3>
                        </div>
                        <div className="relative">
                            {/* <label htmlFor="BACKGROUND/CAREER OBJECTIVES" className="relative ">
                        {translations[language].about.background.label}
                    </label> */}
                            {translations?.[language]?.about?.background?.content?.map((paragraph, index) => (
                                <p key={index} className="indent-10 text-lg md:pl-5">
                                    {paragraph}
                                </p>
                            ))}
                            {/* {translations[language].about.background.content.map((paragraph, index) => (
                        <p key={index} className="indent-10">
                            {paragraph}
                        </p>
                    ))} */}
                        </div>
                    </div>
                </div>
                <div className="mb-8 grid grid-cols-1 justify-between gap-8 md:grid-cols-2">
                    <div className="rounded-2xl bg-white p-5 dark:bg-gray-800">
                        <label htmlFor="Education" className="uppercase">
                            {translations[language].about.education.label}
                        </label>
                        <div className="border-l-4 border-slate-500 pl-3">
                            <h3 className="">{translations[language].about.education.content}</h3>
                            <p>{translations[language].about.education.time}</p>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-5 dark:bg-gray-800">
                        <label htmlFor="Work experience" className="uppercase">
                            {translations[language].about.experience.label}{' '}
                        </label>
                        <div className="space-y-5">
                            {translations[language].about.experience.content.map((data, index) => (
                                <div key={index} className="border-l-4 border-slate-500 pl-3">
                                    <h3 className="font-bold">{data.title}</h3>
                                    <h4>{data.company}</h4>
                                    <h4>{data.time}</h4>
                                    <p>{data.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="space-y-3 rounded-xl bg-white p-5 dark:bg-gray-800">
                    <label htmlFor="Education" className="uppercase">
                        {translations[language].about.hobbies.label}
                    </label>
                    <div className="flex flex-wrap gap-5">
                        {translations?.[language]?.about?.hobbies?.content?.map((data, indexx) => (
                            <p
                                className="whitespace-nowrap rounded-xl bg-yellow-200 px-1 dark:bg-orange-400"
                                key={indexx}
                            >
                                {data}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default About;
