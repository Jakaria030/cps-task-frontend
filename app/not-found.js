import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-900 text-white px-6">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500">
        404
      </h1>

      <p className="text-xl md:text-2xl mt-4 text-slate-300">
        Oops! Page not found.
      </p>

      <p className="text-slate-400 mt-2 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link href="/">
        <p className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200">
          Go Back Home
        </p>
      </Link>

      <div className="absolute top-10 left-10 size-80 rounded-full bg-violet-500/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 size-80 rounded-full bg-teal-400/20 blur-3xl"></div>
    </div>
  );
};

export default NotFound;
