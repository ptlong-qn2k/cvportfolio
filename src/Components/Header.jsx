import React, { useEffect } from 'react';
import { SiDungeonsanddragons } from 'react-icons/si';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../Hook/Languagecontext';
import { translations } from '../Locals/LanguageContent';
import Menutoogle from './Common/Menutoogle';
import { Menu, MenuItem, Button, ListItemIcon, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThemeToggle from './Common/Themetoggle';

function Header() {
    const myFb = (url) => {
        window.open(url, '_blank');
    };
    const myGithub = (url) => {
        window.open(url, '_blank');
    };

    const navigate = useNavigate();
    const location = useLocation();
    const { language, toggleLanguage } = useLanguage();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const languageClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    //dùng kiểm tra ngôn ngữ khi nhập link
    useEffect(() => {
        try {
            const langFromUrl = location.pathname.split('/')[1];
            // console.log(langFromUrl);
            if (langFromUrl && langFromUrl === 'en') {
                toggleLanguage('en');
            } else toggleLanguage('vi');
        } catch {
            console.log('kiem tra ngon ngu: header');
        }
    }, [location.pathname, language, toggleLanguage]);

    const handleClose = (langCode) => {
        setAnchorEl(null);
        if (!langCode) {
            return;
        } else {
            toggleLanguage(langCode);
        }
        // const segments = location.pathname.split('/').filter(Boolean);
        // const rest = segments.slice(1); // bỏ langCode hiện tại (ở index 0)
        //giữ nguyên trang khi thay đổi ngôn ngữ
        const [, ...rest] = location.pathname.split('/').filter(Boolean);
        const newPath = `/${langCode}${rest.length ? '/' + rest.join('/') : ''}`;
        // console.log('path', newPath);
        navigate(newPath);
    };

    return (
        <>
            <div className="fixed left-0 top-0 z-50 flex w-full flex-row items-center justify-between px-5 font-bold shadow-md backdrop-blur-lg transition-all duration-300 dark:shadow-[0_4px_30px_-10px_rgba(139,92,246,0.3)]">
                <div
                    className="flex min-h-[60px] cursor-pointer flex-col items-center justify-center opacity-50 dark:text-maudo"
                    onClick={() => navigate(`/${language}`)}
                >
                    <SiDungeonsanddragons className="min-h-8 min-w-8" />
                    <p className="text-[8px]">ptl2k</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div className="hidden flex-row items-center justify-center gap-x-5 whitespace-nowrap md:flex">
                        <h3
                            onClick={() => navigate(`/${language}`)}
                            className={`card-hover cursor-pointer px-[4px] py-[2px] ${
                                location.pathname === `/${language}` ? 'menu-active' : 'text-maudo'
                            }`}
                        >
                            {translations[language].header.home}
                        </h3>
                        <h3
                            onClick={() => navigate(`/${language}/about`)}
                            className={`card-hover cursor-pointer px-[4px] py-[2px] ${
                                location.pathname === `/${language}/about` ? 'menu-active' : 'text-xanhduong'
                            }`}
                        >
                            {translations[language].header.about}
                        </h3>
                        <h3
                            onClick={() => navigate(`/${language}/techstack`)}
                            className={`card-hover cursor-pointer px-[4px] py-[2px] ${
                                location.pathname === `/${language}/techstack` ? 'menu-active' : 'text-mauvang'
                            }`}
                        >
                            {translations[language].header.techstack}
                        </h3>
                        <h3
                            onClick={() => navigate(`/${language}/project`)}
                            className={`card-hover cursor-pointer px-[4px] py-[2px] ${
                                location.pathname === `/${language}/project` ? 'menu-active' : 'text-maucam'
                            }`}
                        >
                            {translations[language].header.projects}
                        </h3>
                        <h3
                            onClick={() => navigate(`/${language}/contact`)}
                            className={`card-hover cursor-pointer px-[4px] py-[2px] ${
                                location.pathname === `/${language}/contact` ? 'menu-active' : 'text-xanhla'
                            }`}
                        >
                            {translations[language].header.contact}
                        </h3>
                        {/* <div className="cursor-pointer gap-2 flex flex-row justify-between">
                        <FaFacebook
                            onClick={() => myFb('https://www.facebook.com/mrlong2k/')}
                            className="w-8 h-8 card-hover"
                        />
                        <FaGithubSquare
                            onClick={() => myGithub('https://github.com/ptlong-qn2k')}
                            className="w-8 h-8 card-hover"
                        />
                    </div> */}
                    </div>
                    <div className="flex flex-row justify-center gap-2">
                        <Button
                            onClick={languageClick}
                            variant="outlined"
                            endIcon={<ExpandMoreIcon />}
                            sx={{ textTransform: 'none', fontSize: '16px', padding: 0 }}
                            className="card-hover px-3 py-[2px]"
                        >
                            {language === 'en' ? (
                                <img src={'/images/header/en.png'} alt="" className="w-6" />
                            ) : (
                                <img src={'/images/header/vn.png'} alt="" className="w-6" />
                            )}
                        </Button>
                        <Menu
                            disableScrollLock
                            sx={{
                                textTransform: 'none',
                                fontSize: '14px',
                                width: '150px',
                                padding: '0 0',
                                display: 'block',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={() => handleClose()}
                            className="z-50"
                        >
                            <MenuItem
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '14px',
                                    padding: '0 2s',
                                }}
                                onClick={() => handleClose('en')}
                            >
                                <ListItemIcon sx={{ position: 'relative', bottom: '1px' }}>
                                    <img src={'/images/header/en.png'} alt="" className="h-4 w-4" />
                                </ListItemIcon>
                                <ListItemText disableTypography sx={{ position: 'relative', left: '-10px' }}>
                                    English
                                </ListItemText>
                            </MenuItem>
                            <MenuItem
                                sx={{ textTransform: 'none', fontSize: '14px', padding: ' auto' }}
                                onClick={() => handleClose('vi')}
                            >
                                <ListItemIcon sx={{ position: 'relative', bottom: '1px' }}>
                                    <img src={'/images/header/vn.png'} alt="" className="ư-4 h-4" />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography
                                    sx={{ position: 'relative', left: '-10px', fontSize: '14px' }}
                                >
                                    Tiếng Việt
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                        <ThemeToggle />
                    </div>
                    <Menutoogle />
                </div>
            </div>
        </>
    );
}

export default Header;
