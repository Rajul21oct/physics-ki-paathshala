import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center px-8 py-4 bg-orange-500 text-white shadow"
    >
      <h1 className="text-xl font-bold">
        Physics Ki Paathshala
      </h1>

      <div className="space-x-6 flex items-center">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>

        {user ? (
          <>
            <span className="font-semibold">{user.name}</span>

            <button
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
              className="bg-white text-orange-600 px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-white text-orange-600 px-4 py-2 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </motion.nav>
  );
}