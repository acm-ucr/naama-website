import Image from "next/image";
import AboutUs from "@/components/about/About";
import GetInvolved from "@/components/about/GetInvolved";
import ExploreOurEvents from "@/components/about/ExploreOurEvents";
import aboutGroup from "../../../public/about/groupAbout.webp";
const About = () => {
  return (
    <div className="flex w-full flex-grow flex-col">
      <div className="mx-12 mt-12 flex columns-2 justify-center">
        <AboutUs />
        <Image src={aboutGroup} alt={"About Group"} className="mx-12 mb-18" />
      </div>
      <ExploreOurEvents />
      <GetInvolved />
    </div>
  );
};

export default About;
