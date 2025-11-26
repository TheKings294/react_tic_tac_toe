import {Link} from 'react-router';

function ErrorPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

            <h1 className="text-9xl font-bold mb-4 text-cyan">404</h1>
            <p className="text-lg mb-6 text-cyan">
                The page you are looking for could not be found.
            </p>

            <Link
                to="/"
                className="px-6 py-3 rounded-lg border text-sm font-medium border-orange text-orange"
            >
                Go Back Home
            </Link>
        </div>
    );
}

export default ErrorPage;