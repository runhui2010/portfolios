import { FaRegWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactModal({ isShowContact, setIsShowContact }) {
  return (
    <motion.div
      key="dialog"
      className="fixed inset-x-1/3 w-1/3 h-1/4 bg-blue-500 text-2xl text-white font-bold rounded flex  flex-col items-center justify-center shadow-lg shadow-white"
      initial={{
        y: -1600,
        x: -1150,
        scale: 0,
        opactiy: 0,
      }}
      animate={{
        y: 0,
        x: 0,
        scale: 1,
        opactiy: 1,
      }}
      exit={{
        y: 1000,
        scale: 0,
        opactiy: 0.5,
      }}
      transition={{
        duration: 1,
        type: "spring",
        bounce: 0.5,
      }}
    >
      <div className="w-10/12 flex justify-end">
        <FaRegWindowClose onClick={() => setIsShowContact(!isShowContact)} />
      </div>
      <a href="https://github.com/runhui2010" className="hover:text-red-500">
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/runhui-huang-8602561a2/"
        className="hover:text-red-500"
      >
        Linkedin
      </a>
      <span>Email: fredhuang128@gmail.com</span>
      <span>Cell: 415-819-0028</span>
    </motion.div>
  );
}
