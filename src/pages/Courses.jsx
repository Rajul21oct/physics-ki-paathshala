import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Class 11 Physics",
    price: "₹9999",
    desc: "Complete syllabus with concept clarity",
  },
  {
    title: "Class 12 Physics",
    price: "₹14999",
    desc: "Boards + competitive prep",
  },
  {
    title: "JEE Advanced Physics",
    price: "₹49999",
    desc: "High-level problem solving",
  },
];

export default function Courses() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-orange-50 p-8">

      <h1 className="text-4xl font-bold text-center mb-10 text-orange-600">
        Our Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-bold text-orange-600">
              {course.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {course.desc}
            </p>

            <p className="mt-4 text-xl font-semibold">
              {course.price}
            </p>

           <button
  onClick={() => navigate(`/courses/${index}`)}
  className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
>
  View Details
</button>
          </motion.div>
        ))}

      </div>

    </div>
  );
}