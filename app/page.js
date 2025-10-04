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
    <main className="">
      {/* Course section */}
      <section className="relative">
        <div className="absolute top-0 left-0 size-80 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 size-80 bg-teal-400/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-8 sm:py-16">
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
    </main>
  );
};

export default HomePage;
