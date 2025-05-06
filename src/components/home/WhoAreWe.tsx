import Image from "next/image";
import groupHome from "@/public/home/groupHome.webp";
import Button from "@/components/Button";

const WhoAreWe = () => {
  return (
    <div className="relative h-[500px] w-full">
      <Image
        src={groupHome}
        alt="groupHome"
        className="absolute h-full w-full opacity-80"
        priority
      />
      <div className="bg-naama-ivory-100 absolute inset-0 opacity-80" />

      <div className="relative z-10 flex h-full w-full items-center justify-center gap-20">
        <h1 className="text-naama-blue-300 font-playfair text-6xl">
          <span className="underline">Who</span> are
          <span className="italic"> We</span>?
        </h1>
        <p className="font-nunito text-naama-blue-300 mt-5 max-w-3xl">
          NAAMA NextGen UCR is a student chapter of the National Arab American
          Medical Association dedicated to
          <span className="font-extrabold"> empowering </span>
          Arab American students pursuing careers in healthcare. We strengthen
          professional growth, cultural awareness, and community engagement
          through
          <span className="font-extrabold"> mentorship</span>,
          <span className="font-extrabold"> networking</span>, and
          <span className="font-extrabold"> service initiatives</span>.
        </p>
        <Button className="mb-10 self-end" message="Learn More" href="/" />
      </div>
    </div>
  );
};

export default WhoAreWe;
