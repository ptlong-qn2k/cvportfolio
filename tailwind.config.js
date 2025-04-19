/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // <== Quan trọng
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
            mobile: { min: '375px' },
            sm: { min: '550px' },
            md: { min: '768px' },
            lg: { min: '900px' },
            xl: { min: '1300px' },
        },
    },
    plugins: [],
};
