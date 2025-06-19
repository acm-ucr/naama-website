import Image from "next/image";
import aboutGroup from "@/public/about/groupAbout.webp";

const AboutUs = () => {
  return (
    <div className="my-auto flex flex-col items-center justify-center gap-[5vw] px-[15vw] py-[8vh] md:flex-row">
      <div className="mx-auto h-[55vh] w-[32vh] items-center justify-center rounded-[10vh] bg-white/15 p-[5vh] text-center text-white md:mx-0 md:text-left">
        <p className="font-playfair text-4xl font-medium">
          <span className="border-b">About</span>
          <span className="border-b italic md:border-0"> Us</span>
        </p>

        <p className="mt-5 text-white md:text-lg">
          Our mission is to provide academic and professional resources, build a
          strong sense of community, and promote cultural representation within
          the medical field. <br /> <br />
          Whether you are looking for guidance, leadership opportunities or a
          way to give back to the community,{" "}
          <strong>NAAMA UCR welcomes you to be part of our journey.</strong>
        </p>
      </div>
      <Image
        src={aboutGroup}
        alt={"About Group"}
        className="my-auto object-contain"
      />
    </div>
  );
};

export default AboutUs;
