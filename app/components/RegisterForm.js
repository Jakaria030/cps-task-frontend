"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerUser } from "../api/api";
import { errorAlert, successAlert } from "../utils/toastify";

const RegisterForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key].trim()) newErrors[key] = "This field is required";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    const res = await registerUser(form);
    setLoading(false);

    if (res.error) {
      errorAlert(res.error);
    } else {
      successAlert("Registration successfull. Please Login");
      router.push("/login");
      setForm({ username: "", email: "", password: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 max-w-md mx-auto"
    >
      {/* Full name */}
      <div>
        <label className="block mb-1">Full Name</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter full name"
          className="w-full px-3 py-2 rounded bg-dark border border-gray-600 focus:outline-none focus:border-orange-500"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full px-3 py-2 rounded bg-dark border border-gray-600 focus:outline-none focus:border-orange-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="w-full px-3 py-2 rounded bg-dark border border-gray-600 focus:outline-none focus:border-orange-500"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      {/* Submit nutton */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white rounded transition-colors duration-200"
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
