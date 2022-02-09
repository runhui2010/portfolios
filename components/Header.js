import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { SiIota } from "react-icons/si";
import { motion } from "framer-motion";

export default function Header() {
  const activeIconVariant = {
    start: {
      x: -200,
    },
    end: {
      x: 0,
      rotate: [0, 0, 270, 270, 0],
    },
    transition: {
      duration: 1,
    },
  };
  const InactiveIconVariant = {
    start: {
      x: 0,
    },
    end: {
      x: 0,
      rotate: [0, 0, 270, 270, 0],
    },
    transition: {
      duration: 1,
    },
  };
  return (
    <div className="w-10/12 flex justify-between items-center m-auto py-2 row-start-1 row-end-2 ">
      <Head>
        <title>Runhui Portfolios</title>
        <meta name="description" content="Full Stack App portfolios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-fit flex justify-center items-center gap-5">
        <div className="relative w-16 h-16 rounded-full">
          <Image
            src="https://res.cloudinary.com/dueoejo47/image/upload/v1644369675/avatar_oghw9x.jpg"
            layout="fill"
            objectFit="cover"
            alt="avatar"
            className="rounded-full"
          />
        </div>
        <div className="text-xl">Runhui Huang</div>
      </div>
      <div className="w-fit flex gap-10">
        <Link href="/">
          <a className="flex justify-center items-center gap-2  border-b-4 border-b-black hover:border-b-red-500 p-4 text-2xl">
            <motion.span
              initial={{
                x: -300,
                opactiy:0.1
              }}
              animate={{
                x: 0,
                opactiy:1
              }}
              transition={{
                duration: 1,
              }}
            >
              <GoHome className="text-blue-500" />
            </motion.span>

            <span>Home</span>
          </a>
        </Link>
        <Link href="/portfolio">
          <a className="flex justify-center items-center gap-2  border-b-4 border-b-black hover:border-b-red-500 p-4 text-2xl">
            <motion.span
              animate={{
                rotate: [0, 3600, 0, 3600, 0],
              }}
              transition={{
                duration: 1,
              }}
            >
              <SiIota className="text-blue-500" />
            </motion.span>
            <span>Portfolio</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
