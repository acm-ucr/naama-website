import Image from "next/image";
import Button from "@/components/Button";

const CurvedText = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center">
      <svg width="800" height="100" className="fill-naama-blue-100">
        <defs>
          <path id="arcPath" d="M 50,160 A 500,500 0 0,1 750,160" />
        </defs>
        <text className="text-naama-blue-100" fontSize="24" textAnchor="middle">
          <textPath href="#arcPath" startOffset="50.5%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="flex w-full items-center justify-around">
      <div className="flex flex-col items-center text-center text-white">
        <CurvedText text="University of California, Riverside Chapter" />
        <h1 className="font-playfair mb-10 text-[55px] font-medium">
          National Arab American
          <br />
          Medical Association
        </h1>
        <p className="mb-20 text-[16px] font-medium">
          Empowering future healthcare leaders through{" "}
          <span className="font-bold">knowledge</span>,{" "}
          <span className="font-bold">support</span>,<br />
          and a <span className="font-bold">shared commitment</span> to
          excellence in medicine
        </p>
        <Button text="Join Now" />
      </div>
      <Image
        src="/path/to/image"
        width={599}
        height={479}
        alt="naama hero picture"
      />
    </section>
  );
};

export default Hero;
