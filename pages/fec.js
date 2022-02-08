import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Carousel from "../components/Carousel.js";
import { cards } from "../public/cards.js";
import { FaRegWindowClose } from "react-icons/fa";

export default function Fec() {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className="flex justify-end">
        <Link href="/portfolio">
          <a className="text-5xl"><FaRegWindowClose/></a>
        </Link>
      </div>
      <div className="w-10/12 row-start-2 row-end-6 mx-auto">
        <Carousel path={cards[0].slide} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}
