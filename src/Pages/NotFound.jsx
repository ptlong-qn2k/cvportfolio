import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gray-100 p-4 text-center dark:bg-gray-900">
            <h1 className="mb-4 text-6xl font-bold text-blue-600">404</h1>
            <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white">Page Not Found</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
