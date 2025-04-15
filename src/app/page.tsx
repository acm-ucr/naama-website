import GetInvolved from "../components/home/GetInvolved";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Button message="Join Now" />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Home;
