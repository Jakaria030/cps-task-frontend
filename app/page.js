import {
  getAchievements,
  getCourses,
  getEnrollmentTime,
  STRAPI_URL,
} from "./api/api";
import CourseCard from "./components/CourseCard";
import EnrollmentCountdown from "./components/EnrollmentCountDown";

const HomePage = async () => {
  const { data: courses } = await getCourses();
  const { data } = await getEnrollmentTime();
  const enrollmentTime = data[0];
  const { data: achievements } = await getAchievements();

  const colors = [
    "text-orange-500",
    "text-yellow-400",
    "text-teal-400",
    "text-sky-400",
  ];

  return (
    <main>
      {/* Course section */}
      <section className="relative">
        <div className="absolute top-0 left-0 size-80 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 size-80 rounded-full bg-violet-500/5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-8 sm:pt-16 md:pt-28">
          <div className="grid gap-8 md:gap-16 grid-cols-1 lg:grid-cols-2">
            {courses?.map((course) => (
              <CourseCard
                key={course.documentId}
                documentId={course.documentId}
                image={`${STRAPI_URL}${course.thumbnail.url}`}
                title={course.title}
                description={course.description}
                price={course.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Course enrollment count down */}
      <section className="py-8 sm:py-16 md:py-28 relative">
        <div className="absolute top-0 left-0 size-80 rounded-full bg-violet-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 size-80 rounded-full bg-teal-400/5 blur-3xl"></div>

        <div className="border-y border-slate-500">
          <EnrollmentCountdown
            startDate={enrollmentTime.startTime}
            endDate={enrollmentTime.endTime}
          />
        </div>
      </section>

      {/* Our achievements section */}
      <section className="text-white">
        <div className="max-w-7xl mx-auto px-4 pb-8 sm:px-8 sm:pb-16 md:pb-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Our Achievements
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Students enrolled in our courses have achieved amazing ranks in
            coding contests.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, indx) => {
              return (
                <div
                  key={achievement.documentId}
                  className="bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className={`${colors[indx]} text-4xl font-bold mb-2`}>
                    {achievement.count}
                  </h3>
                  <p className="text-gray-400">{achievement.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
