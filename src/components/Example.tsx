const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-naama-ivory-100 flex w-2/3 flex-col items-center gap-10 rounded-sm p-10">
      <div className="bg-naama-blue-100 w-1/2 p-5 text-center">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-naama-blue-200 w-full rounded-full p-5 text-center">
          {props.text2}
        </div>
        <div className="bg-naama-blue-200 w-full rounded-full p-5 text-center">
          {props.text2}
        </div>
      </div>
      <div className="bg-naama-blue-300 w-1/2 p-5 text-center">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
