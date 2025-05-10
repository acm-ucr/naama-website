import ComeJoinUs from "@/components/home/ComeJoinUs";
import Feed from "@/components/home/Feed";
import Hero from "@/components/home/Hero";
import WhoAreWe from "@/components/home/WhoAreWe";

const Home = () => {
  return (
    <div className="bg-naama-blue-200 flex flex-col items-center justify-center">
      <Hero />
      <WhoAreWe />
      <ComeJoinUs />
      <Feed />
    </div>
  );
};

export default Home;
