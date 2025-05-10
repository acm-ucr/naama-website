import Image from "next/image";
import Button from "@/components/Button";
import CircularText from "@/components/home/CircularText";
import heroImage from "@/public/gallery/image16.webp";

const Hero = () => {
  return (
    <div className="font-nunito flex w-full items-start justify-center py-8 text-white">
      <div className="flex w-1/2 flex-col items-center justify-center text-center">
        <CircularText text="University of California, Riverside Chapter" />
        <div className="font-playfair text-6xl">
          National Arab American <br /> Medical Association
        </div>
        <p className="mt-8 mb-16">
          Empowering future healthcare leaders through{" "}
          <span className="font-bold">knowledge, support,</span> <br /> and a{" "}
          <span className="font-bold">shared commitment</span> to excellence in
          medicine
        </p>
        <Button message="Join Now" href="/" />
      </div>
      <div className="w-1/2 p-4">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="h-full w-full"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
