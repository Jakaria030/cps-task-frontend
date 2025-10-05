"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginUser } from "../api/api";
import { errorAlert, successAlert } from "../utils/toastify";

const LoginForm = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.identifier.trim()) newErrors.identifier = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await loginUser(form);
      console.log(res);
      if (res.error) {
        errorAlert("Invalid credentials. Try again.");
      } else {
        localStorage.setItem("token", res.jwt);
        localStorage.setItem("user", JSON.stringify(res.user));
        successAlert("Login successful! Redirecting...");
        router.push("/");
      }
    } catch (err) {
      errorAlert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="identifier"
            value={form.identifier}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full px-3 py-2 rounded bg-dark border border-gray-600 focus:outline-none focus:border-orange-500"
          />
          {errors.identifier && (
            <p className="text-red-500 text-sm">{errors.identifier}</p>
          )}
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

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white rounded transition-colors duration-200"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
