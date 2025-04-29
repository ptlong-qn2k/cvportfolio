import React, { useEffect } from 'react';
import { SiDungeonsanddragons } from 'react-icons/si';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../Hook/Languagecontext';
import { header } from './Content';
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
        const langFromUrl = location.pathname.split('/')[1];
        // console.log(langFromUrl);
        if (langFromUrl && langFromUrl !== language) {
            toggleLanguage(langFromUrl);
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
        const [, ...rest] = location.pathname.split('/').filter(Boolean);
        const newPath = `/${langCode}${rest.length ? '/' + rest.join('/') : ''}`;
        navigate(newPath);
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg shadow-md dark:shadow-[0_4px_30px_-10px_rgba(139,92,246,0.3)] px-5 flex flex-row items-center justify-between font-bold">
                <div
                    className="min-h-[60px] flex flex-col justify-center items-center opacity-50 dark:text-maudo cursor-pointer"
                    onClick={() => navigate(`/${language}`)}
                >
                    <SiDungeonsanddragons className=" min-w-8 min-h-8 " />
                    <p className="text-[8px]">ptl2k</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <div className="hidden md:flex flex-row justify-center items-center gap-x-5 whitespace-nowrap ">
                        <h3
                            onClick={() => navigate(`/${language}`)}
                            className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                location.pathname === `/${language}` ? 'menu-active' : 'text-maudo'
                            }`}
                        >
                            {header[language].home}
                        </h3>
                        <h3
                            onClick={() => navigate(`/${language}/about`)}
                            className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                location.pathname === `/${language}/about` ? 'menu-active' : 'text-xanhduong'
                            }`}
                        >
                            {header[language].about}
                        </h3>
                        <h3
                            onClick={() => navigate(`/${language}/techstack`)}
                            className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                location.pathname === `/${language}/techstack` ? 'menu-active' : 'text-mauvang'
                            }`}
                        >
                            {header[language].techStack}
                        </h3>
                        <h3
                            onClick={() => navigate(`/${language}/project`)}
                            className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                location.pathname === `/${language}/project` ? 'menu-active' : 'text-maucam'
                            }`}
                        >
                            {header[language].projects}
                        </h3>
                        <h3
                            onClick={() => navigate(`/${language}/contact`)}
                            className={`cursor-pointer card-hover px-[4px] py-[2px] ${
                                location.pathname === `/${language}/contact` ? 'menu-active' : 'text-xanhla'
                            }`}
                        >
                            {header[language].contact}
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
                    <div className="flex flex-row justify-center gap-2 ">
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
                                    <img src={'/images/header/en.png'} alt="" className="w-4 h-4" />
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
