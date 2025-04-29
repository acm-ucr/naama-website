import GetInvolved from "@/components/about/GetInvolved";
import ExploreOurEvents from "@/components/home/ExploreOurEvents";

const About = () => {
  return (
    <div className="flex w-full flex-grow flex-col">
      <ExploreOurEvents />
      <GetInvolved />
    </div>
  );
};

export default About;
