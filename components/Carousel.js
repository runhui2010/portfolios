import Image from "next/image";
import {
  BsFillCaretLeftSquareFill,
  BsFillCaretRightSquareFill,
} from "react-icons/bs";


export default function Carsousel({ index, setIndex, path }) {
  return (
    <div className="relative w-full h-full">
      <BsFillCaretLeftSquareFill
        className="absolute inset-y-2/4 -left-8 z-50 text-4xl rounded-full hover:bg-red-500"
        onClick={() => setIndex(index === 0 ? path.length - 1 : index - 1)}
      />
      <Image src={path[index]} layout="fill" objectFit="contain" alt="cover" />

      <BsFillCaretRightSquareFill
        className="absolute inset-y-2/4 -right-8 z-50 text-4xl rounded-full hover:bg-red-500"
        onClick={() => setIndex(index == path.length - 1 ? 0 : index + 1)}
      />
    </div>
  );
}
