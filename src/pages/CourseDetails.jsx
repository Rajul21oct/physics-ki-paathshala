import { useParams, useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Class 11 Physics",
    price: "₹9999",
    desc: "Complete syllabus with concept clarity",
    details: "Covers mechanics, thermodynamics, waves and more."
  },
  {
    title: "Class 12 Physics",
    price: "₹14999",
    desc: "Boards + competitive prep",
    details: "Covers electrostatics, optics, modern physics."
  },
  {
    title: "JEE Advanced Physics",
    price: "₹49999",
    desc: "High-level problem solving",
    details: "Advanced problem solving and concept mastery."
  },
];

export default function CourseDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const courseIndex = parseInt(id);
  const course = courses[courseIndex];

  const handleEnroll = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", {
        state: { from: `/courses/${courseIndex}` }
      });
    } else {
      alert("Enrolled Successfully!");
    }
  };

  if (!course) return <h1>Course not found</h1>;

  return (
    <div className="min-h-screen bg-orange-50 p-8">

      <h1 className="text-4xl font-bold text-orange-600">
        {course.title}
      </h1>

      <p className="mt-4 text-gray-600">
        {course.desc}
      </p>

      <p className="mt-4 text-lg">
        {course.details}
      </p>

      <p className="mt-6 text-2xl font-bold">
        {course.price}
      </p>

      <button
        onClick={handleEnroll}
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg"
      >
        Enroll Now
      </button>

    </div>
  );
}