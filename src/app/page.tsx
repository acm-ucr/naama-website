import Example from "@/components/Example";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Example text1="Adjust" text2="these" text3="Props" />
      <Button message="Join Now" />
      <Footer />
    </div>
  );
};

export default Home;
