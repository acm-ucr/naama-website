import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import JoinUs from "@/components/home/JoinUs";

const Home = () => {
  return (
    <div className="bg-naama-blue-200 flex w-screen flex-col items-center justify-center">
      <NavBar />
      <Button message="Join Now" />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Home;
