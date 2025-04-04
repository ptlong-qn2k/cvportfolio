import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './Styles/App.css';
import { Routes, Route, useParams } from 'react-router-dom';
import { Homepage } from './Homepage';
import About from './Pages/About';
import TechStack from './Pages/TechStack';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Login from './Pages/Login';
import { LanguageProvider } from './Components/Languagecontext';
function App() {
    const [count, setCount] = useState(0);

    return (
        <LanguageProvider>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/techstack" element={<TechStack />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/project" element={<Projects />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </LanguageProvider>
    );
}

export default App;
