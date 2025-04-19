import Layout from './Layout';
import { translations } from '../Components/Content';
import { useLanguage } from '../Service/Languagecontext';
import { FaLink } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

function Projects() {
    const { language } = useLanguage();

    return (
        <Layout>
            <div className=" flex flex-row gap-x-5 justify-center">
                {translations?.[language]?.projects?.items?.map((data, index) => {
                    // console.log(typeof data.content);

                    return (
                        <div
                            key={index}
                            className="w-[373px] relative flex flex-col items-center rounded-[10px] overflow-hidden border-2"
                        >
                            {/* <img src={data.URL} alt="" className=" object-cover" /> */}
                            <div
                                className={`relative ${
                                    data.scroll == 'true' ? 'scroll-preview' : 'w-full h-[250px] ove'
                                } `}
                            >
                                <img src={data.URL} alt={data.title} className="w-full absolute  object-cover" />
                                <div className="w-full flex flex-row justify-end items-center pr-5 z-10 relative bottom-[50px] mb-[-50px] gap-3 ">
                                    {data.image.map((data1, indx) => {
                                        // console.log(data1);
                                        return (
                                            <div key={indx} className="w-14 h-full">
                                                <img className="" src={data1} alt="" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="w-full px-5 text-left ">
                                <h2 className="text-xl font-bold text-center ">{data.title}</h2>
                                <ul className="list-disc pl-5 min-h-[300px] text-sm mb-2">
                                    {data.content.map((line, idx) => (
                                        <li key={idx} className="mb-1">
                                            {line}
                                        </li>
                                    ))}
                                </ul>

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
                    );
                })}
            </div>
        </Layout>
    );
}

export default Projects;
