import GlowCard from "@/components/GlowCard";
import TitleHeader from "@/components/TitleHeader";
import { expCards } from "@/constants";
import Image from "next/image";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div className="exp-card-wrapper" key={card.title}>
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <Image
                        src={card.imgPath}
                        alt={card.title}
                        height={120}
                        width={120}
                      />
                    </div>
                  </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
