type stringTitle = {
  Titlename: string;
};

const Heading = ({ Titlename }: stringTitle) => {
  return (
    <div className="text-naama-ivory-100 w-full items-center justify-center bg-blue-500 p-10">
      <div className="flex h-screen w-screen items-center justify-start pl-20">
        <h1 className="font-serif text-5xl font-bold">{Titlename}</h1>
      </div>
      <div className="bg-naama-ivory-100 mt-4 h-0.5 w-full"></div>
    </div>
  );
};

export default Heading;
