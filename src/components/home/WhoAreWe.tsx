import Image from "next/image";
import image6 from "@/public/gallery/image6.webp";
import Button from "@/components/Button";

const WhoAreWe = () => {
  return (
    <section
      className="relative flex w-full items-center justify-center py-16 md:py-24"
      id="who-we-are"
      aria-labelledby="who-are-we-heading"
    >
      <Image
        src={image6}
        alt=""
        priority
        layout="fill"
        objectFit="cover"
        objectPosition="center 45%"
        className="z-0"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 bg-white opacity-60"
        aria-hidden="true"
      ></div>

      <div className="relative z-20 container mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-naama-blue-200 flex flex-col items-center justify-center gap-8 text-center md:flex-row md:text-left">
          <h1
            id="who-are-we-heading"
            className="font-playfair mb-4 text-4xl md:mb-0 md:flex-1 md:text-5xl"
          >
            <span className="border-naama-blue-200 border-b">Who</span> Are We?
          </h1>

          <div className="relative md:flex-1">
            <p className="font-nunito text-lg md:text-xl">
              NAAMA NextGen UCR is a student chapter of the National Arab
              American Medical Association dedicated to{" "}
              <span className="font-bold">empowering</span> Arab American
              students pursuing careers in healthcare. We strengthen
              professional growth, cultural awareness, and community engagement
              through <span className="font-bold">mentorship</span>,{" "}
              <span className="font-bold">networking</span>, and{" "}
              <span className="font-bold">service initiatives</span>.
            </p>

            <div className="mt-6 flex justify-end">
              <Button message="Learn More" href="/about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
