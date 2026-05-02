import { useState } from "react";
import VideoModal from "../components/VideoModal";
import { motion } from "framer-motion";
import pulleyGif from "../assets/pully.gif";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [openVideo, setOpenVideo] = useState(false);
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-orange-50">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-24 px-6 text-white overflow-hidden"
      >

        {/* Background GIF */}
        <img
          src={pulleyGif}
          alt="Physics animation"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold">
            Physics Ki Paathshala 🚀
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-orange-100">
            Master Physics with deep conceptual clarity and real-world intuition.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
           <motion.button
  whileHover={{ scale: 1.1 }}
  onClick={() => navigate("/courses")}
  className="bg-orange-500 px-6 py-3 rounded-lg font-semibold"
>
  Explore Courses
</motion.button>

            <motion.button
  whileHover={{ scale: 1.1 }}
  onClick={() => setOpenVideo(true)}
  className="border border-white px-6 py-3 rounded-lg"
>
  Watch Demo
</motion.button>
          </div>

        </div>
      </motion.div>

      {/* FEATURES SECTION */}
      <div className="py-20 px-6 md:px-16 grid md:grid-cols-3 gap-8">
        {[
          "Concept Clarity",
          "Live Classes",
          "Study Material"
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition border border-orange-100"
          >
            <h3 className="text-xl font-bold text-orange-600">{item}</h3>
            <p className="mt-3 text-gray-600">
              Premium learning experience with deep understanding.
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="bg-orange-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Physics Journey Today
        </h2>
        <p className="mt-4 text-orange-100">
          Join thousands of students learning smarter 🚀
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold"
        >
          Get Started
        </motion.button>
      </div>
<VideoModal
  isOpen={openVideo}
  onClose={() => setOpenVideo(false)}
/>
    </div>
    
  );
}