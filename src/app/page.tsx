import JoinUs from "@/components/home/JoinUs";
import Feed from "@/components/home/Feed";
import Hero from "@/components/home/Hero";
import WhoAreWe from "@/components/home/WhoAreWe";

const Home = () => {
  return (
    <div className="bg-naama-blue-200 flex w-full flex-col">
      <Hero />
      <WhoAreWe />
      <JoinUs />
      <Feed />
    </div>
  );
};

export default Home;
