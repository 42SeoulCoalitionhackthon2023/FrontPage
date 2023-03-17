import title from "public/image/title.png";
import Image from "next/image";
import Link from "next/link";

export default function Title({ width, height }) {
  return (
    <>
      <Link href={`/`}>
        <Image
          src={title}
          alt="title image"
          width={width}
          height={height}
        />
      </Link>
    </>
  );
}
