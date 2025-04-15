import { logoIconsList } from "@/constants";
import Image from "next/image";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <Image src={icon.imgPath} alt="company logo" width={152} height={152} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, idx) => (
            <LogoIcon key={idx} icon={icon} />
          ))}
          {logoIconsList.map((icon, idx) => (
            <LogoIcon key={idx} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
