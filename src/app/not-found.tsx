import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="bg-naama-blue-200 font-playfair flex grow flex-col items-center justify-center gap-4 text-white">
      <p className="mt-4 mb-2 text-5xl sm:mt-2 sm:text-6xl">404</p>
      <p className="w-2/3 text-center text-4xl sm:w-1/3">
        Oh no! The page you're looking for can't be found!
      </p>
      <Button message="Go Back Home" href="/" className="mt-4" />
    </div>
  );
};

export default NotFound;
