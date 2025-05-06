import JoinUs from "./JoinUs";

const ComeJoinUs = () => {
  return (
    <div className="bg-naama-blue-200 flex flex-col items-center justify-center py-36 text-center text-white">
      <div className="font-playfair text-5xl">
        Come <span className="italic"> Join Us</span>
      </div>
      <p className="py-15 text-2xl">
        Whether you're looking to expand your knowledge or gain hands-on <br />
        experience, we are here to help you pave the way to <br />{" "}
        <span className="font-bold">a successful future in medicine.</span>
      </p>
      <JoinUs />
    </div>
  );
};

export default ComeJoinUs;
