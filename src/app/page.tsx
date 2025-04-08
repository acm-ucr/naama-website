import Example from "@/components/Example";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Example text1="Adjust" text2="these" text3="Props" />
      <Footer />
    </div>
  );
};

export default Home;
