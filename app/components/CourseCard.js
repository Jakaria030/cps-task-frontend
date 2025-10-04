import Image from "next/image";

const CourseCard = ({ image, title, description, price }) => {
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
        <h3 className="text-xl font-semibold text-center text-white">{title}</h3>
        <p className="text-slate-300 text-center mt-3">{description}</p>
        <p className="my-4 flex justify-center items-baseline text-yellow-400">
          <span className="text-5xl font-bold">{price}/-</span>
          <span className="text-sm font-medium ml-1">TK</span>
        </p>

        {/* Buttons */}
        <div className="mt-auto flex gap-3 pt-4">
          <button className="flex-1 cursor-pointer px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded transition">
            Enroll
          </button>
          <button className="flex-1 cursor-pointer px-3 py-2 border border-orange-500 text-orange-400 hover:bg-slate-700 rounded transition">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
