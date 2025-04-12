import Image from "next/image";

const Button = ({ className, text, id }) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <Image
            src={"/images/arrow-down.svg"}
            alt="arrow-down"
            width={48}
            height={48}
          />
        </div>
      </div>
    </a>
  );
};

export default Button;
