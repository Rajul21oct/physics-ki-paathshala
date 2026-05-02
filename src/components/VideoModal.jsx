import { motion } from "framer-motion";

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-white rounded-lg overflow-hidden w-[90%] md:w-[700px] z-10"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl"
        >
          ✖
        </button>

        {/* YouTube Video */}
        <iframe
          className="w-full h-[400px]"
          src="https://www.youtube.com/embed/iVMw00LZYc0"
          title="Physics Demo"
          allowFullScreen
        ></iframe>
      </motion.div>

    </div>
  );
}