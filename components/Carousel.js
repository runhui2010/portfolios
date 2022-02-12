import Image from "next/image";
import {
  BsFillCaretLeftSquareFill,
  BsFillCaretRightSquareFill,
} from "react-icons/bs";
import ReactPlayer from "react-player";

export default function Carsousel({ index, setIndex, path }) {
  const URL="https://www.youtube.com/embed/AljapeOjU3M";
  return (
    // <div className="relative w-full h-full">
    //   <BsFillCaretLeftSquareFill
    //     className="absolute inset-y-2/4 -left-8 z-50 text-4xl rounded-full hover:bg-red-500"
    //     onClick={() => setIndex(index === 0 ? path.length - 1 : index - 1)}
    //   />
    //   <Image src={path[index]} layout="fill" objectFit="contain" alt="cover" />

    //   <BsFillCaretRightSquareFill
    //     className="absolute inset-y-2/4 -right-8 z-50 text-4xl rounded-full hover:bg-red-500"
    //     onClick={() => setIndex(index == path.length - 1 ? 0 : index + 1)}
    //   />
    // </div>
    <div className=" w-full h-full">
      <ReactPlayer
        url={URL}
        playing={true}
        width='100%'
        height='100%'
      />
    </div>
  );
}
