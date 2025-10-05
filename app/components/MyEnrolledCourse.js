"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getMyCourses } from "../api/api";
import CourseCard from "./CourseCard";

const MyEnrolledCourse = () => {
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/login");
      return;
    }

    const fetchMyCourses = async () => {
      const { data } = await getMyCourses(token);
      setCourses(data);
    };

    fetchMyCourses();
  }, [router]);

  return (
    <div className="max-w-7xl mx-auto my-16 px-4">
      {courses && courses.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.documentId}
              documentId={course.documentId}
              image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${course.thumbnail.url}`}
              title={course.title}
              enrolled={true}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-white mt-16">
          You have no enrolled courses.
        </p>
      )}
    </div>
  );
};

export default MyEnrolledCourse;
