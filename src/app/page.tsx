import Example from "@/components/Example";
import Button from "@/components/Button";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Example text1="Adjust" text2="these" text3="Props" />
      <Button message="Join Now" />
    </div>
  );
};

export default Home;
