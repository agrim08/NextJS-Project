"use client";

import Link from "next/link";
import CourseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
};

const FeaturedCourses = () => {
  const featuredCourses = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-zinc-900">
      <div className="text-center">
        <h2 className="text-blue-400 uppercase text-2xl font-semibold tracking-wide">
          Featured Courses
        </h2>
        <p className="mt-3 text-3xl leading-4 font-extrabold tracking-tight text-white sm:text-4xl uppercase">
          Learn from the Best
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-6">
        {featuredCourses.map((course: Course) => (
          <div key={course.id} className="flex justify-center mx-3">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  {course.description}
                </p>
                <Link href={`/courses/${course.slug}`}>Learn More</Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link
          href={"/courses"}
          className="border border-blue-800 text-white bg-black rounded-2xl shadow-2xl hover:bg-white hover:text-black transition duration-200 px-4 py-4"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
