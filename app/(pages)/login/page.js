import LoginForm from "@/app/components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-8 sm:py-6">
      <div className="bg-slate-800 text-white rounded-lg shadow-lg p-8 max-w-md w-full mx-auto my-12 sm:my-16 border border-slate-500">
        {/* Form title */}
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Login form */}
        <LoginForm />

        {/* Register link*/}
        <p className="text-sm text-gray-400 mt-4 text-center">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200"
          >
            Register
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
