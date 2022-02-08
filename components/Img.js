import Image from "next/image";

export default function Img({ name }) {
  const path = "/../public/" + name;
  return (
    <div className='relative'>
      <Image src={path} width={40} height={60} objectFit="contain" alt="cover" />
    </div>
  );
}
