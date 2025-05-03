import './Styles/App.css';
import { Routes, Route, useParams, Navigate, useLocation } from 'react-router-dom';
import { Homepage } from './Homepage';
import About from './Pages/About';
import TechStack from './Pages/TechStack';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Login from './Pages/Login';
import { LanguageProvider } from './Hook/Languagecontext';
import { ThemeProvider } from './Hook/ThemeContext';
import ScrollToTop from './Hook/ScrollToTop';
import NotFound from './Pages/NotFound';
import LanguageRedirect from './Hook/LanguagRedirect';
function App() {
    const defaultLanguage = 'en';

    return (
        <LanguageProvider>
            <ThemeProvider>
                <LanguageRedirect />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Navigate to={`/${defaultLanguage}`} replace />} />
                    <Route path="/:lang" element={<Homepage />} />
                    <Route path="/:lang/about" element={<About />} />
                    <Route path="/:lang/techstack" element={<TechStack />} />
                    <Route path="/:lang/contact" element={<Contact />} />
                    <Route path="/:lang/project" element={<Projects />} />
                    <Route path="/:lang/login" element={<Login />} />
                    {/* Bắt tất cả route không khớp => NotFound */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ThemeProvider>
        </LanguageProvider>
    );
}

export default App;
