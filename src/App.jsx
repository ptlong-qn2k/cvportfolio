import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './Styles/App.css';
import { Routes, Route, useParams } from 'react-router-dom';
import { AllComponent } from './AllComponent';
import About from './Pages/About';
import TechStack from './Pages/TechStack';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
function App() {
    const [count, setCount] = useState(0);

    return (
        <Routes>
            <Route path="/" element={<AllComponent />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/techstack" element={<TechStack />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/project" element={<Projects />}></Route>
        </Routes>
    );
}

export default App;
