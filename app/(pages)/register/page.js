import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-8 sm:py-6">
      <div className="bg-slate-800 text-white rounded-lg shadow-lg p-8 max-w-md w-full mx-auto my-12 sm:my-16 border border-slate-500">
        {/* Form title */}
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {/* Register form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              className="w-full px-3 py-2 rounded bg-dark border border-gray-600 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              className="w-full px-3 py-2 rounded bg-dark border border-gray-600 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded bg-dark border border-gray-600 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 rounded bg-dark border border-gray-600 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white rounded transition-colors duration-200"
          >
            Register
          </button>
        </form>

        {/* Login link*/}
        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
