import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import JoinUs from "@/components/home/JoinUs";
import ComeJoinUs from "@/components/home/ComeJoinUs";
import Feed from "@/components/home/Feed";
import Hero from "@/components/home/Hero";
import WhoAreWe from "@/components/home/WhoAreWe";

const Home = () => {
  return (
    <div className="bg-naama-blue-200 flex w-screen flex-col items-center justify-center">
      <NavBar />
      <Hero />
      <WhoAreWe />
      <ComeJoinUs />
      <JoinUs />
      <Button message="Join Now" href="error" />
      <Feed />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
