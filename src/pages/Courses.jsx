import { useEffect, useState } from "react";
import { getCourses } from "../services/courseService";

export default function Courses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 p-8">

      <h1 className="text-3xl font-bold text-orange-600 mb-6">
        Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {courses.map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-xl font-bold">
              {course.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {course.description}
            </p>

            <p className="mt-4 text-orange-600 font-bold">
              ₹{course.price}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}