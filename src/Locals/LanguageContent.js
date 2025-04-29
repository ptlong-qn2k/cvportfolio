import enHome from './en/home';
import enHeader from './en/header';
import enAbout from './en/about';
import enContact from './en/contact';
import enProject from './en/project';

import viHeader from './vi/header';
import viHome from './vi/home';
import viAbout from './vi/about';
import viContact from './vi/contact';
import viProject from './vi/project';
export const translations = {
    en: {
        home: enHome,
        header: enHeader,
        about: enAbout,
        projects: enProject,
        contact: enContact,
    },
    vi: {
        home: viHome,
        header: viHeader,
        about: viAbout,
        projects: viProject,
        contact: viContact,
    },
};

export const header = {
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
