import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  alt_text: string
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  alt_text
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group">
      <Image
        src={src}
        alt={alt_text}
        width={400}
        height={350}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-300 text-base">{description}</p>
      </div>
    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center lg:opacity-0 group-hover:opacity-100 opacity-100 transition-opacity duration-300">
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="px-5 py-2 bg-[#2A0E61] text-white font-medium rounded-lg hover:bg-[#3A1E71] transition-colors"
    >
      Preview
    </Link>
  </div>
    </div>
  );
};
