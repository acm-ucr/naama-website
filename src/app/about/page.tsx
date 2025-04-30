import AboutUs from "@/components/about/About";
import GetInvolved from "@/components/about/GetInvolved";
import ExploreOurEvents from "@/components/home/ExploreOurEvents";

const About = () => {
  return (
    <div className="flex w-full flex-grow flex-col">
      <AboutUs />
      <ExploreOurEvents />
      <GetInvolved />
    </div>
  );
};

export default About;
