import Image from "next/image";
import groupHome from "@/public/home/groupHome.webp";
import Button from "@/components/Button";

const WhoAreWe = () => {
  return (
    <div className="relative h-96 w-full">
      <Image
        src={groupHome}
        alt="groupHome"
        className="absolute h-full w-full object-cover opacity-80"
      />
      <div className="bg-naama-ivory-100 absolute inset-0 opacity-80" />

      <div className="relative z-10 flex h-full w-full items-center gap-20 px-32">
        <h1 className="text-naama-blue-200 font-playfair text-5xl font-bold whitespace-nowrap">
          <span className="underline decoration-2 underline-offset-8">Who</span>{" "}
          are
          <span className="italic"> We</span>?
        </h1>
        <div className="flex flex-col gap-4">
          <p className="font-nunito text-naama-blue-200 p-10 text-xl">
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
            className="mr-14 ml-auto bg-white hover:scale-104 hover:bg-gray-200"
            message="Learn More"
            href="/about"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
