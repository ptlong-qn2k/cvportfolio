import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiVite } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
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
const header = {
    en: {
        home: 'home',
        about: 'About me',
        techStack: 'Tech Stack',
        projects: 'Projects',
        contact: 'Contact',
    },
    vi: {
        home: 'Trang chủ',
        about: 'Giới thiệu',
        techStack: 'Công nghệ',
        projects: 'Dự án',
        contact: 'Liên hệ',
    },
};
const translations = {
    en: {
        home: {
            title: 'Hi 👋, My name is',
            name: 'Pham Thanh Long,',
            description: 'a Front-end Developer specializing in ReactJS',
        },
        about: {
            background: {
                label: 'BACKGROUND/CAREER OBJECTIVES :',
                content: [
                    `Hello! I'm Pham Thanh Long, a Fresher Front-end Developer with a passion for building modern and
                        user-friendly web interfaces. I have experience working with ReactJS, JavaScript (ES6+),
                        Tailwind CSS, and RESTful APIs.`,
                    `My goal is to grow as a Front-end Developer, expand my knowledge in Backend, and eventually
                        become a Full-stack Developer.`,
                    `I enjoy exploring new technologies, building real-world projects, and sharing knowledge with the developer.`,
                ],
            },
            education: {
                label: 'Education:',
                content: 'Danang University of Science and Technology',
            },
            experience: {
                label: 'Work experience:',
                content: '',
            },
        },
        techStack: '',
        projects: {
            label: 'Project',
            items: [
                {
                    title: 'create admin login page',
                    content: 'Phát triển trang đăng nhập bảo mật cho quản trị viên bằng React.js',
                    URL: '/images/projects/admin.png',
                    techstask: 'HTML, Javascript, React, Tailwind, Material-UI',
                    vercel: 'https://project1-responsive-five.vercel.app/',
                    github: 'https://github.com/ptlong-qn2k/project1-responsive',
                },
                {
                    title: 'create langding page',
                    content: 'Phát triển trang đăng nhập bảo mật cho quản trị viên bằng React.js',
                    URL: '/images/projects/langding.png',
                    techstask: 'HTML, Javascript, React, Tailwind, Material-UI',
                    vercel: 'https://react2done.vercel.app/',
                    github: 'https://github.com/ptlong-qn2k/react2done',
                },
            ],
        },

        contact: 'contact me',
    },

    vi: {
        home: {
            title: 'Xin chào 👋, Tôi tên là',
            name: 'Phạm Thanh Long,',
            description: 'một Nhà phát triển Front-end chuyên về ReactJS',
        },
        about: {
            background: {
                label: 'QUÁ TRÌNH PHÁT TRIỂN/MỤC TIÊU NGHỀ NGHIỆP:',
                content: [
                    'Xin chào! Tôi là Phạm Thanh Long, một Fresher Front-end Developer với niềm đam mê xây dựng giao diện web hiện đại và thân thiện với người dùng. Tôi có kinh nghiệm làm việc với ReactJS, JavaScript (ES6+), Tailwind CSS và RESTful APIs.',
                    'Mục tiêu của tôi là phát triển bản thân với vai trò Front-end Developer, mở rộng kiến thức về Backend và cuối cùng trở thành một Full-stack Developer.',
                    'Tôi thích khám phá các công nghệ mới, xây dựng các dự án thực tế và chia sẻ kiến thức với cộng đồng lập trình viên.',
                ],
            },
            education: {
                label: 'Học vấn: ',
                content: 'Đại học Bách Khoa Đà Nẵng',
            },
            experience: {
                label: 'Kinh nghiệm làm việc:',
                content: '',
            },
        },
        projects: {
            label: 'Project',
            items: [
                {
                    title: 'Tạo trang đăng nhập admin',
                    content:
                        'Phát triển trang đăng nhập bảo mật cho quản trị viên bằng React.js và Firebase Authentication.',
                    URL: '/images/projects/admin.png',
                    techstask: 'HTML, Javascript, React, Tailwind, Material-UI',
                    vercel: 'https://project1-responsive-five.vercel.app/',
                    github: 'https://github.com/ptlong-qn2k/project1-responsive',
                },
                {
                    title: 'xây dựng langding page',
                    content: 'Phát triển trang đăng nhập bảo mật cho quản trị viên bằng React.js',
                    URL: '/images/projects/langding.png',
                    techstask: 'HTML, Javascript, React, Tailwind, Material-UI',
                    vercel: 'https://react2done.vercel.app/',
                    github: 'https://github.com/ptlong-qn2k/react2done',
                },
            ],
            image: '',
        },
        techStack: '',

        contact: 'liên hệ tôi',
    },
};
const techstackIcon = [
    { title: 'hrml', icon: <FaHtml5 />, color: 'text-[#E44F26]', value: '80' },
    { title: 'css', icon: <FaCss3 />, color: 'text-[#1572B6]', value: '70' },
    { title: 'javascript', icon: <SiJavascript />, color: 'text-mauvang bg-black', value: '80' },
    { title: 'react', icon: <FaReact />, color: 'text-xanhduong bg-mauvang', value: '90' },
    { title: 'tailwind', icon: <SiTailwindcss />, color: 'text-[#44A8B3]', value: '80' },
    { title: 'sass', icon: <FaSass />, color: 'text-[#CD6799]', value: '50' },
    { title: 'git', icon: <FaGitAlt />, color: 'text-[#DE4C36]', value: '70' },
    { title: 'visualcode', icon: <BiLogoVisualStudio />, color: 'text-[#1F9CF0]', value: '60' },
    { title: 'github', icon: <FaGithub />, color: 'text-black', value: '80' },
    { title: 'vite', icon: <img src="/vite.svg" alt="Vite" />, value: '80' },
    { title: 'material-UI', icon: <img src="/materialui.svg" alt="mui" />, color: '', value: '80' },
];

export { home, header, translations, techstackIcon };
