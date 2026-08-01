import React, { useState } from "react";

const Register = ({ setToggle }) => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find(
  (user) =>
    user.email.toLowerCase() === formData.email.toLowerCase()
);

  if (existingUser) {
    alert("Email already exists!");
    return;
  }

  users.push(formData);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration Successful!");

  setformData({
    name: "",
    email: "",
    password: "",
  });

  setToggle(true); // Go to Login
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-90 p-6 rounded-xl flex flex-col gap-4 shadow-lg">
        <h1>Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required
            value={formData.name}
            name="name"
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded"
            type="text"
            placeholder="Name"
          />

          <input
            required
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded"
            type="email"
            placeholder="Email"
          />

          <input
            required
            value={formData.password}
            name="password"
            onChange={handleChange}
            className="p-2 border border-gray-400 rounded"
            type="password"
            placeholder="Password"
          />

          <button className="p-2 bg-blue-600 text-white rounded">
            Register
          </button>
        </form>

        <p>
          Already have an account?
          <span
            onClick={() => setToggle(true)}
            className="text-blue-600 cursor-pointer"
          >
            {" "}Login Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;