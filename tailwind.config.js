/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            blue: '#1fb6ff',
            purple: '#7e5bef',
            pink: '#ff49db',
            orange: '#ff7849',
            green: '#13ce66',
            yellow: '#ffc82c',
            'gray-dark': '#273444',
            gray: '#8492a6',
            'gray-light': '#d3dce6',
            primary: '#FF1C03',
            gray_cus: '#FAFAFA',
        },
        extend: {},
        screens: {
            xl: { max: '1300px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '900px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '768px' },
            mdpc: { min: '376px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '550px' },
            // => @media (max-width: 639px) { ... }
        },
    },
    plugins: [],
};
