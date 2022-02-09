import Image from "next/image";

export default function Img({ name }) {
  return (
    <div className='relative'>
      <Image src={name} width={40} height={60} objectFit="contain" alt="cover" />
    </div>
  );
}
