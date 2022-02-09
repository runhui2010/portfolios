import Header from "../components/Header.js";
import ContactModal from "../components/ContactModal.js";
import styles from "../styles/Home.module.css";
import { skillSet } from "../public/skillSet.js";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isShowContact, setIsShowContact] = useState(false);
  return (
    <div className={styles.container}>
      <Header />
      <div className="w-11/12 flex flex-col lg:grid lg:grid-cols-6 mx-auto row-start-2 row-end-7">
        <AnimatePresence>
          {isShowContact && (
            <ContactModal
              setIsShowContact={setIsShowContact}
              isShowContact={isShowContact}
            />
          )}
        </AnimatePresence>
        <div className="col-start-2 col-end-4 flex flex-col justify-center items-center lg:items-start gap-1">
          <div className="text-6xl lg:text-8xl">Frontend</div>
          <div className="text-6xl lg:text-8xl">Developer</div>
          <div className="mt-5">
            I like to craft solid and scalable frontend products with great user
            experience
          </div>
          <button
            className=" bg-transparent text-red-500 hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mt-4 lg:mt-10"
            onClick={() => setIsShowContact(!isShowContact)}
          >
            Contact me
          </button>
        </div>
        <div className="w-full md:w-5/6 mx-auto col-start-5 col-end-7 px-5 flex flex-col justify-center items-center">
          <div className="mt-10 lg:mt-0 text-2xl lg:text-3xl mb-5 text-blue-500">Technical Skill</div>
          <div className="flex flex-wrap">
            {skillSet.map((skill) => {
              return (
                <span
                  key={skill}
                  className="m-1 border border-red-500 rounded-xl text-xs py-2 px-4 hover:border-b"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
