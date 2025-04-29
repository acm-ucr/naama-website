import GetInvolved from "@/components/home/GetInvolved";
import ExploreOurEvents from "@/components/home/ExploreOurEvents";
const About = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      About Us
      <ExploreOurEvents />
      <GetInvolved />
    </div>
  );
};

export default About;
