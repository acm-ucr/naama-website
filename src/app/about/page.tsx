import Image from "next/image";
import AboutUs from "@/components/about/About";
import GetInvolved from "@/components/about/GetInvolved";
import ExploreOurEvents from "@/components/about/ExploreOurEvents";
import aboutGroup from "../../../public/about/groupAbout.webp";
const About = () => {
  return (
    <div className="flex w-full flex-grow flex-col">
      <div className="mx-12 mt-12 flex columns-2 flex-col justify-center md:flex-row">
        <AboutUs />
        <Image
          src={aboutGroup}
          alt={"About Group"}
          className="mt-12 mb-18 object-contain md:mx-12 md:mt-0"
        />
      </div>

      <ExploreOurEvents />
      <GetInvolved />
    </div>
  );
};

export default About;
