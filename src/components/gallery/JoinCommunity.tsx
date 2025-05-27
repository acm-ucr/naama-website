import Button from "@/components/Button";

const JoinCommunity = () => {
  return (
    <div className="bg-naama-blue-100 relative flex h-128 w-full justify-center overflow-hidden text-white">
      <div className="to-naama-blue-100 absolute aspect-square w-3/4 -translate-y-1/2 rounded-full bg-white bg-gradient-to-t to-40% md:h-full md:w-auto"></div>
      <div className="z-10 flex h-3/4 flex-col items-center py-4 md:justify-between">
        <p className="font-playfair text-xl md:text-4xl">
          Join Our Community <span className="italic">Today</span>
        </p>
        <div className="flex translate-y-2/1 flex-col items-center gap-4 md:translate-y-0 md:py-0">
          <p className="font-nunito text-center text-sm md:text-lg">
            Want to be part of these experiences? Fill out the application form
            to
            <br />
            become a member and start your journey with us today!
          </p>
          <Button
            message="Member Form"
            href="/"
            className="to-naama-bl to-naama-blue-100 bg-gradient-to-r"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
