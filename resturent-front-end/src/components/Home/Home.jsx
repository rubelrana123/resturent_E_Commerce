import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <Link to="/about" className="mt-4 text-blue-600 underline">Go to About</Link>
    </div>
  );
};

export default Home;