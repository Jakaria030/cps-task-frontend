import MyEnrolledCourse from "@/app/components/MyEnrolledCourse";

const MyLearningPage = async () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      {/* <div className="min-h-[75vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-slate-300">
          No courses enrolled yet
        </h2>
        <Link
          href="/"
          className="mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-white transition"
        >
          Browse Courses
        </Link>
      </div> */}

      <MyEnrolledCourse />
    </div>
  );
};

export default MyLearningPage;
