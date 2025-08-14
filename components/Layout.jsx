import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.route}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen bg-gray-900 text-gray-100 px-6"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}