import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiVite } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

const header = {
    en: {
        home: 'home',
        about: 'About me',
        techStack: 'Tech Stack',
        projects: 'Projects',
        contact: 'Contact',
        navigation: ['Navigation', 'Social'],
    },
    vi: {
        home: 'Trang chủ',
        about: 'Giới thiệu',
        techStack: 'Công nghệ',
        projects: 'Dự án',
        contact: 'Liên hệ',
        navigation: ['Điều hướng', 'Mạng xã hội'],
    },
};
const translations = {
    en: {
        home: {
            title: 'Hi 👋, My name is',
            name: 'Pham Thanh Long,',
            description: 'a Front-end Developer specializing in ReactJS',
            contentabout:
                'A passionate front-end developer building modern web applications with the latest technologies.',
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
                    content: [
                        'Admin Login Page: Built with React.js, React Router, and Material UI.',
                        'Product Management: CRUD (Create, Read, Update, Delete) functionality for managing products.',
                        'Search Functionality: Implemented search to filter products easily.',
                        'API Integration: Fetch data using Axios for smooth communication with backend services.',
                        'Form Handling: User login form with React Hook Form and validation with Yup.',
                        'Responsive Design: Ensured the application works well on various devices.',
                    ],
                    URL: '/images/projects/admin.png',
                    image: [
                        '/images/projects/image1.png',
                        '/images/projects/image2.png',
                        '/images/projects/image3.png',
                        '/images/projects/login.png',
                    ],
                    techstask: 'HTML, Javascript, React, Tailwind, Material-UI',
                    vercel: 'https://project1-responsive-five.vercel.app/',
                    github: 'https://github.com/ptlong-qn2k/project1-responsive',
                    scroll: 'false',
                },
                {
                    title: 'create langding page',
                    content: [
                        'Trang đăng nhập quản trị : Được xây dựng bằng React.js, React Router và Material UI.',
                        'Quản lý sản phẩm : Chức năng CRUD (Tạo, Đọc, Cập nhật, Xóa) để quản lý sản phẩm.',
                        'Chức năng tìm kiếm : Triển khai chức năng tìm kiếm để lọc sản phẩm dễ dàng.',
                        'Tích hợp API : Lấy dữ liệu bằng Axios để giao tiếp thông suốt với các dịch vụ phụ trợ.',
                        'Xử lý biểu mẫu : Biểu mẫu đăng nhập của người dùng với React Hook Form và xác thực với Yup .',
                        'Thiết kế đáp ứng : Đảm bảo ứng dụng hoạt động tốt trên nhiều thiết bị khác nhau.',
                    ],
                    URL: '/images/projects/Homepage.png',
                    image: [],
                    techstask: 'HTML, Javascript, React, Tailwind, Material-UI',
                    vercel: 'https://react2done.vercel.app/',
                    github: 'https://github.com/ptlong-qn2k/react2done',
                    scroll: 'true',
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
            contentabout:
                'Một lập trình viên front-end đam mê xây dựng các ứng dụng web hiện đại với các công nghệ mới nhất.',
        },
        about: {
            background: {
                label: 'QUÁ TRÌNH PHÁT TRIỂN/MỤC TIÊU NGHỀ NGHIỆP:',
                content: [
                    'Xin chào! Tôi là Phạm Thanh Long, một Fresher Front-end  Developer với niềm đam mê xây dựng giao diện web hiện đại và thân thiện với người dùng. Tôi có kinh nghiệm làm việc với ReactJS, JavaScript (ES6+), Tailwind CSS và RESTful APIs.',
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
                    content: [
                        'Trang đăng nhập quản trị : Được xây dựng bằng React.js, React Router và Material UI.',
                        'Quản lý sản phẩm : Chức năng CRUD (Tạo, Đọc, Cập nhật, Xóa) để quản lý sản phẩm.',
                        'Chức năng tìm kiếm : Triển khai chức năng tìm kiếm để lọc sản phẩm dễ dàng.',
                        'Tích hợp API : Lấy dữ liệu bằng Axios để giao tiếp thông suốt với các dịch vụ phụ trợ.',
                        'Xử lý biểu mẫu : Biểu mẫu đăng nhập của người dùng với React Hook Form và xác thực với Yup .',
                        'Thiết kế đáp ứng : Đảm bảo ứng dụng hoạt động tốt trên nhiều thiết bị khác nhau.',
                    ],
                    URL: '/images/projects/admin.png',
                    image: [
                        '/images/projects/image1.png',
                        '/images/projects/image2.png',
                        '/images/projects/image3.png',
                        '/images/projects/login.png',
                    ],
                    techstask: 'HTML, Javascript, React, Tailwind, Material-UI',
                    vercel: 'https://project1-responsive-five.vercel.app/',
                    github: 'https://github.com/ptlong-qn2k/project1-responsive',
                    scroll: 'false',
                },
                {
                    title: 'xây dựng langding page',
                    content: [
                        'Admin Login Page: Built with React.js, React Router, and Material UI.',
                        'Product Management: CRUD (Create, Read, Update, Delete) functionality for managing products.',
                        'Search Functionality: Implemented search to filter products easily.',
                        'API Integration: Fetch data using Axios for smooth communication with backend services.',
                        'Form Handling: User login form with React Hook Form and validation with Yup.',
                        'Responsive Design: Ensured the application works well on various devices.',
                    ],
                    URL: '/images/projects/Homepage.png',
                    image: [],
                    techstask: 'HTML, Javascript, React, Tailwind, Material-UI',
                    vercel: 'https://react2done.vercel.app/',
                    github: 'https://github.com/ptlong-qn2k/react2done',
                    scroll: 'true',
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

export { header, translations, techstackIcon };
