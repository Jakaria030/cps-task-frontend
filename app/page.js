import image2 from "../public/bootcamp.jpg";
import image1 from "../public/cp-course.jpg";
import CourseCard from "./components/CourseCard";

const HomePage = () => {
  const courses = [
    {
      id: 1,
      image: image1,
      title: "Web Development Bootcamp",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore assumenda, ex error inventore fugiat repellat quam culpa eligendi consequatur aspernatur ullam necessitatibus exercitationem consectetur deserunt alias eveniet dicta sit perferendis.",
      price: 49,
    },
    {
      id: 2,
      image: image2,
      title: "Data Structures & Algorithms",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore assumenda, ex error inventore fugiat repellat quam culpa eligendi consequatur aspernatur ullam necessitatibus exercitationem consectetur deserunt alias eveniet dicta sit perferendis.",
      price: 39,
    },
  ];

  return (
    <main>
      {/* Course section */}
      <section className="relative">
        <div className="absolute top-0 left-0 size-80 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 size-80 bg-teal-400/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-8 sm:py-16 md:py-28">
          <div className="grid gap-8 md:gap-16 grid-cols-1 lg:grid-cols-2">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                image={course.image}
                title={course.title}
                description={course.description}
                price={course.price}
              />
            ))}
          </div>
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
            <div className="bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-orange-500 mb-2">4</h3>
              <p className="text-gray-400">Codeforces Expert</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">29</h3>
              <p className="text-gray-400">Codeforces Specialist</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-teal-400 mb-2">106</h3>
              <p className="text-gray-400">Codeforces Pupil</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-sky-400 mb-2">15</h3>
              <p className="text-gray-400">BD Big Tech</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
