import { FaRegWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactModal({ isShowContact, setIsShowContact }) {
  return (
    <motion.div
      key="dialog"
      className="fixed inset-x-1/5 md:inset-x-1/4  lg:inset-x-1/3 w-5/6 md:w-1/2  lg:w-1/3 p-3 bg-blue-500 text-xl text-white font-bold rounded flex  flex-col items-center justify-center shadow-lg shadow-white"
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
      <a
        href="https://docs.google.com/document/d/1I3COYqhyoH6hi-Qvu76bFyR146Cy2nMojMG5voeDFUM/edit?usp=sharing"
        className="hover:text-red-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <a
        href="https://github.com/runhui2010"
        className="hover:text-red-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/runhui-huang-8602561a2/"
        className="hover:text-red-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      <span>Email: fredhuang128@gmail.com</span>
      <span>Cell: 415-819-0028</span>
    </motion.div>
  );
}
