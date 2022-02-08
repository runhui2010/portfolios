import Img from "./Img.js";
import Image from "next/image";
import Link from "next/link";

export default function Card({ card }) {

    return (
      <Link href={card.path}>
        <a className="border border-4 border-white w-3/5 h-3/5 grid grid-rows-6  hover:scale-110" target={card.path.startsWith('/')?'_parent':'_blank'}>
          <div className="relative row-start-1 row-end-6">
            <Image src={card.cover} layout="fill" objectFit="cover" alt="cover" />
          </div>
          <div className=" row-start-6 row-end-7 flex justify-evenly bg-gray-300">
            {card.stack.map((s) => {
              return <Img key={s} name={s} />;
            })}
          </div>
        </a>
      </Link>
    );
  }
