import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://mern-back-ytjl.onrender.com/register", formData);
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-form h-screen flex justify-center items-center">
      <div className="max-w-[400px] w-full">
        <h2 className="text-center text-2xl">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* Username */}
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              className="border pl-2 py-3 rounded-md"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="border pl-2 py-3 rounded-md"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="border pl-2 py-3 rounded-md"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 transition text-white py-3 rounded-md cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
