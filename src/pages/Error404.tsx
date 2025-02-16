import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="text-lg text-blue-400 hover:text-blue-500">Go back to home</Link>
      </div>
    </div>
  );
}

export default Error404;
