"use client";

import Image from "next/image";
import Link from "next/link";

const CourseCard = ({
  documentId,
  image,
  title,
  description,
  price,
  enrolled = false,
}) => {
  return (
    <div
      className="max-w-xl lg:max-w-full mx-auto bg-slate-800 rounded-lg shadow-md overflow-hidden flex flex-col border border-slate-700 
      hover:shadow-lg md:hover:scale-105 transition-all duration-300 ease-in-out"
    >
      {/* Course thumbnail */}
      <div className="w-full h-80 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* Course Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-center text-white">
          {title}
        </h3>

        {description && (
          <p className="text-slate-300 text-center mt-3">{description}</p>
        )}

        {price && (
          <p className="my-4 flex justify-center items-baseline text-yellow-400">
            <span className="text-5xl font-bold">{price}/-</span>
            <span className="text-sm font-medium ml-1">TK</span>
          </p>
        )}

        {/* Buttons */}
        <div className="mt-auto flex gap-3 pt-4">
          <button
            disabled={enrolled}
            className={`${
              enrolled
                ? "bg-orange-600/50 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700 cursor-pointer"
            } flex-1 px-3 py-2 text-white rounded transition`}
          >
            Enroll
          </button>
          <Link
            href={`/my-learning/${documentId}`}
            className="flex-1 cursor-pointer text-center px-3 py-2 border border-orange-500 text-orange-400 hover:bg-slate-700 rounded transition"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
