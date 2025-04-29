import './Styles/App.css';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
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
function App() {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Navigate to="/en" replace />} />
                    <Route path="/:lang" element={<Homepage />}></Route>
                    <Route path="/:lang/about" element={<About />}></Route>
                    <Route path="/:lang/techstack" element={<TechStack />}></Route>
                    <Route path="/:lang/contact" element={<Contact />}></Route>
                    <Route path="/:lang/project" element={<Projects />}></Route>
                    <Route path="/:lang/login" element={<Login />}></Route>
                    {/* Bắt tất cả route không khớp => NotFound */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ThemeProvider>
        </LanguageProvider>
    );
}

export default App;
