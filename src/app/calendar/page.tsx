import Title from "@/components/Title";

const Board = () => {
  return (
    <div className="flex w-full grow flex-col items-center justify-center pl-15">
      <Title title="Events Calendar" />

      <p className="mt-10 flex w-screen pl-50 text-white">
        Stay up to date with the latest events! Whether you're looking to
        connect with like-minded
      </p>

      <p className="flex w-screen pl-50 text-white">
        peers or gain insights into the medical field, there's something for
        everyone. Don't miss out
      </p>

      <p className="mb-25 flex w-screen pl-50 text-white">
        and check out the upcoming events today!
      </p>
    </div>
  );
};

export default Board;
