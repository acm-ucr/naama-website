const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-naama-ivory-100 flex w-2/3 flex-col items-center gap-12 rounded-2xl p-10">
      <div className="flex w-full justify-center">
        <div className="bg-naama-blue-200 flex w-2/3 justify-center p-5 text-center text-3xl">
          {props.text1}
        </div>
      </div>

      <div className="flex w-2/3 justify-center gap-x-10">
        <div className="bg-naama-blue-100 w-full rounded-full p-5 text-center text-3xl text-white">
          {props.text2}
        </div>
        <div className="bg-naama-blue-100 w-full gap-12 rounded-full p-5 text-center text-3xl text-white">
          {props.text2}
        </div>
      </div>
      <div className="bg-naama-blue-300 flex w-2/3 justify-center gap-12 p-5 text-center text-3xl text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
