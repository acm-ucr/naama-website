const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-naama-ivory-100 flex w-2/3 flex-col items-center gap-5 rounded-lg p-10">
      <div className="bg-naama-blue-100 w-1/2 p-2 text-center text-sm">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-4 rounded-full text-center text-sm">
        <div className="bg-naama-blue-200 w-full rounded-full p-2 text-white">
          {props.text2}
        </div>
        <div className="bg-naama-blue-200 w-full rounded-full p-2 text-white">
          {props.text2}
        </div>
      </div>
      <div className="bg-naama-blue-300 w-1/2 gap-4 p-2 text-center text-sm text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
