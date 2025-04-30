import Button from "@/components/Button";
import CircularText from "@/components/CircularText";

const Hero = () => {
  return (
    <div className="font-nunito flex w-full items-start justify-center py-8 text-white">
      <div className="flex w-1/2 flex-col items-center justify-center text-center">
        <CircularText text="University of California, Riverside Chapter" />
        <h1 className="font-playfair text-6xl">
          National Arab American <br /> Medical Association
        </h1>
        <p className="mt-8 mb-16">
          Empowering future healthcare leaders through{" "}
          <span className="font-bold">knowledge, support,</span> <br /> and a{" "}
          <span className="font-bold">shared commitment</span> to excellence in
          medicine
        </p>
        <Button message="Join Now" href="/" />
      </div>
      <div className="w-1/2 border">Image</div>
    </div>
  );
};

export default Hero;
