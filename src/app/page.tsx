import Button from "@/components/Button";
import JoinUs from "@/components/home/JoinUs";
import ComeJoinUs from "@/components/home/ComeJoinUs";
import Feed from "@/components/home/Feed";
import Hero from "@/components/home/Hero";
import WhoAreWe from "@/components/home/WhoAreWe";

const Home = () => {
  return (
    <div className="bg-naama-blue-200 flex w-screen flex-col items-center justify-center">
      <Hero />
      <WhoAreWe />
      <ComeJoinUs />
      <JoinUs />
      <Button message="Join Now" href="error" />
      <Feed />
    </div>
  );
};

export default Home;
