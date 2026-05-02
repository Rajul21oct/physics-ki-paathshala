import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../services/authService";

export default function Login() {

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/courses"; // ✅ define first
  console.log("FROM:", from); // ✅ then use

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form.email, form.password);

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      navigate(from); // ✅ correct redirect

    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="border p-3 mb-4 w-full rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          className="border p-3 mb-4 w-full rounded"
          required
        />

        <button
          type="submit"
          className="bg-orange-500 text-white p-3 w-full rounded hover:bg-orange-600"
        >
          Login
        </button>

    <p className="text-sm text-center mt-4 text-gray-500">
  New user? <span
    onClick={() => navigate("/signup")}
    className="text-orange-600 cursor-pointer"
  >
    Register here
  </span>
</p>
      </form>

    </div>
  );
}