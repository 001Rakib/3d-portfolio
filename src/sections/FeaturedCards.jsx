import { abilities } from "@/constants";
import Image from "next/image";

const FeaturedCards = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <Image src={imgPath} alt={title} height={70} width={70} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-xl">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCards;
