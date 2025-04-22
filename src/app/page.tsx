import Example from "@/components/Example";
import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="bg-naama-blue-200 flex w-screen flex-col items-center justify-center">
      <NavBar />
      <Example text1="Adjust" text2="these" text3="Props" />
      <Button message="Join Now" />
      <Footer />
    </div>
  );
};

export default Home;
