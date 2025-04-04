import Layout from './Layout';
import { translations } from '../Components/Content';
import { useLanguage } from '../Components/Languagecontext';
import { FaLink } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

function Projects() {
    const { language } = useLanguage();
    return (
        <Layout>
            <div className=" flex flex-row gap-x-5 justify-center my-5">
                {translations?.[language]?.projects?.items?.map((data, index) => (
                    <div
                        key={index}
                        className="w-[373px] h-[567px] flex flex-col items-center bg-white rounded-[10px] overflow-hidden "
                    >
                        {/* <img src={data.URL} alt="" className=" object-cover" /> */}
                        <div className="w-full h-[250px] ">
                            <img src={data.URL} alt={data.title} className="w-  full  object-cover" />
                        </div>
                        <div className="w-full px-5 text-left">
                            <h2 className="text-xl font-bold text-center">{data.title}</h2>
                            <p className="text-sm ">{data.content}</p>
                            <p className=" ">
                                <span className="text-sm font-semibold whitespace-nowrap">Tech Stack:</span>
                                <span className="ml-2">{data.techstask}</span>
                            </p>
                        </div>
                        <div className="w-full flex flex-row px-5 justify-between items-center ">
                            <div className="flex flex-row gap-x-2 items-center justify-center">
                                <FaLink className="inline" />
                                <a href={data.vercel} className="underline decoration-black decoration-1">
                                    live preview
                                </a>
                            </div>
                            <div className="flex flex-row gap-x-2 items-center justify-center">
                                <FaGithub className="inline" />
                                <a href={data.github} className="underline decoration-black decoration-1">
                                    view code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default Projects;
