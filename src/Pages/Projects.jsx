import Layout from '../Layout/Layout';
import { translations } from '../Locals/LanguageContent';
import { useLanguage } from '../Hook/Languagecontext';
import { FaLink } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { header } from '../Locals/LanguageContent';

function Projects() {
    const { language } = useLanguage();

    return (
        <Layout>
            <h2 className="text-xl gradient-text font-semibold px-10  mt-[10px] text-center">
                {translations[language].projects.title}
            </h2>
            <div className=" flex flex-col items-center pt-5 md:flex-row gap-5 md:justify-center">
                {translations?.[language]?.projects?.items?.map((data, index) => {
                    // console.log(typeof data.content);
                    return (
                        <div
                            key={index}
                            className="w-[365px] ui1 lg:min-w-[400px] xl:w-[550px] relative flex flex-col items-center rounded-[10px] overflow-hidden border-2 border-white"
                        >
                            {/* <img src={data.URL} alt="" className=" object-cover" /> */}
                            <div
                                className={`relative ${data.scroll == 'true' ? 'scroll-preview' : 'w-full h-[250px]'} `}
                            >
                                <img src={data.URL} alt={data.title} className="w-full absolute  object-cover" />
                                <div className="w-full flex flex-row justify-end items-center pr-5 z-20 relative top-[120px] lg:top-[130px] xl:top-[180px] mb-[-50px] gap-3 ">
                                    {data.image.map((data1, indx) => {
                                        // console.log(data1);
                                        return (
                                            <div key={indx} className="w-14 xl:w-20 h-full">
                                                <img className="" src={data1} alt="" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="w-full px-5 text-left ">
                                <h2 className="mb-2 text-xl font-bold text-center whitespace-nowrap ">{data.title}</h2>
                                <ul className="list-disc pl-5 min-h-[420px] lg:min-h-[380px] xl:min-h-[350px] text-base">
                                    {data.content.map((line, idx) => (
                                        <li key={idx} className="mb-1">
                                            {line}
                                        </li>
                                    ))}
                                </ul>

                                <p className="min-h-20 text-base">
                                    <span className="font-semibold whitespace-nowrap">
                                        {header[language].techstack}:
                                    </span>
                                    <span className="ml-2 text-sm">{data.techstask}</span>
                                </p>
                            </div>
                            <div className="w-full flex flex-row px-5 justify-between items-center ">
                                <div className="flex flex-row gap-x-2 items-center justify-center">
                                    <FaLink className="inline" />
                                    <a href={data.vercel} className="underline decoration-black decoration-1">
                                        {translations[language].projects.titlepage}
                                    </a>
                                </div>
                                <div className="flex flex-row py-2 gap-x-2 items-center justify-center">
                                    <FaGithub className="inline" />
                                    <a href={data.github} className="underline decoration-black decoration-1">
                                        {translations[language].projects.titlecode}
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
}

export default Projects;
