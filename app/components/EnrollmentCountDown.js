"use client";
import { useEffect, useState } from "react";

export default function EnrollmentCountdown({ startDate, endDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date(endDate);
      const diff = end - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
        Course Enrollment
      </h2>
      <p className="text-gray-300 text-lg md:text-xl mb-8">
        Enrollment is open for a limited time. Don't miss out!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 text-white">
        {/* Start time */}
        <div className="bg-slate-800 p-6 rounded-lg shadow flex-1">
          <h3 className="font-semibold mb-2">Start Time</h3>
          <p>{new Date(startDate).toLocaleString()}</p>
        </div>

        {/* End time */}
        <div className="bg-slate-800 p-6 rounded-lg shadow flex-1">
          <h3 className="font-semibold mb-2">End Time</h3>
          <p>{new Date(endDate).toLocaleString()}</p>
        </div>

        {/* Countdown */}
        <div className="bg-slate-800 p-6 rounded-lg shadow flex-1">
          <h3 className="font-semibold mb-2">Time Left</h3>
          <p className="text-2xl font-bold">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </p>
        </div>
      </div>
    </>
  );
}
