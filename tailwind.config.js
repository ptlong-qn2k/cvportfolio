/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                xanhduong: '#1fb6ff',
                maupurple: '#7e5bef',
                mauhong: '#ff49db',
                maucam: '#ff7849',
                xanhla: '#13ce66',
                mauvang: '#ffc82c',
                'gray-dark': '#273444',
                mauxam: '#8492a6',
                'gray-light': '#d3dce6',
                maudo: '#FF1C03',
                gray_cus: '#FAFAFA',
            },
        },
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
