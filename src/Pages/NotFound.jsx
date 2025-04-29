import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center p-4">
            <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
