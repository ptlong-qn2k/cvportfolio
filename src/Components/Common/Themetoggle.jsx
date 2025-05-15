// src/components/ThemeToggle.jsx
import { useContext, useState, useEffect, useRef, useCallback } from 'react';
import { ThemeContext } from '../../Hook/ThemeContext';
export default function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const options = [
        { label: '☀️', value: 'light' },
        { label: '🌙', value: 'dark' },
        { label: '⚙️', value: 'auto' },
    ];

    const handleSelect = useCallback(
        (value) => {
            setTheme(value);
            setOpen(false);
        },
        [setTheme],
    );

    const getLabel = () => {
        const selected = options.find((opt) => opt.value === theme);
        return selected?.label || '⚙️ Auto';
    };
    // 👇 handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="card-hover relative text-lg">
            <button onClick={() => setOpen(!open)} className="rounded-md bg-gray-200 px-3 py-[2px] dark:bg-gray-700">
                {getLabel()}
            </button>
            {open && (
                <div className="absolute z-10 mt-2 rounded-md bg-white shadow-lg dark:bg-gray-800">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            className={`cursor-pointer px-3 py-0 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                theme === option.value ? 'font-semibold' : ''
                            }`}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
