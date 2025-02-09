import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">About Page</h1>
      <Link to="/" className="mt-4 text-blue-600 underline">Go to Home</Link>
    </div>
  );
};

export default About;