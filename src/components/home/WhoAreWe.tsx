import Image from "next/image";
import groupHome from "@/public/home/groupHome.webp";
import Button from "@/components/Button";

const WhoAreWe = () => {
  return (
    <div className="relative h-[60vh] w-full md:h-[60vh]">
      <Image
        src={groupHome}
        alt="groupHome"
        className="absolute h-full w-full object-cover opacity-80"
      />
      <div className="bg-naama-ivory-100 absolute inset-0 opacity-80" />
      <div className="relative flex h-full w-full flex-col items-center justify-center px-5 md:flex md:flex-row md:gap-20 lg:px-20">
        <p className="text-naama-blue-200 font-playfair pt-10 text-3xl font-bold whitespace-nowrap md:pt-0 md:text-5xl">
          <span className="underline decoration-2 underline-offset-8">Who</span>{" "}
          are
          <span className="italic"> We</span>?
        </p>
        <div className="flex flex-col">
          <p className="font-nunito text-naama-blue-200 text-md py-5 text-center md:py-10 md:text-left md:text-xl">
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
          <Button
            className="mx-auto md:mr-14 md:ml-auto"
            message="Learn More"
            href="/about"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
