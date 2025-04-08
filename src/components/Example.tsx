const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-naama-ivory-100 flex w-2/3 flex-col items-center gap-y-8 p-10">
      <div className="bg-naama-blue-100 flex w-1/2 items-center justify-center p-5 text-center text-white">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-x-10">
        <div className="bg-naama-blue-200 flex w-full items-center justify-center rounded-full p-5 text-center text-white">
          {props.text2}
        </div>
        <div className="bg-naama-blue-200 flex w-full items-center justify-center rounded-full p-5 text-white not-odd:text-center">
          {props.text2}
        </div>
      </div>
      {
        <div className="bg-naama-blue-300 flex w-1/2 items-center justify-center p-5 text-center text-white">
          {props.text3}
        </div>
      }
    </div>
  );
};

export default Example;
