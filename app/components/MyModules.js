"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCourseModules } from "../api/api";

const MyModules = ({ courseId }) => {
  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (!token || !user) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/login");
      return;
    }

    const fetchCourse = async () => {
      const courseData = await getCourseModules(courseId, token);
      if (courseData && courseData.modules && courseData.modules.length > 0) {
        setCourse(courseData);
        setCurrentVideo(courseData.modules[0]);
      }
    };

    fetchCourse();
  }, [courseId, router]);

  return (
    <div className="max-w-7xl mx-auto my-16 px-4 flex flex-col lg:flex-row gap-8">
      {/* Left side video */}
      <div className="lg:flex-1 w-full">
        {currentVideo && (
          <iframe
            width="100%"
            height="480"
            src={currentVideo.content_url}
            title={currentVideo?.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        )}
      </div>

      {/* Right side table of content */}
      <div className="lg:w-80 border border-slate-500 rounded-lg p-4 flex flex-col gap-4 bg-slate-800 text-white">
        <h2 className="text-xl font-bold mb-4">{course?.title}</h2>
        <div className="flex flex-col gap-2 overflow-y-auto max-h-[480px]">
          {course?.modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setCurrentVideo(module)}
              className={`text-left p-2 rounded hover:bg-orange-500 transition ${
                currentVideo && currentVideo.id === module.id
                  ? "bg-orange-500 font-semibold"
                  : ""
              }`}
            >
              {module.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyModules;
