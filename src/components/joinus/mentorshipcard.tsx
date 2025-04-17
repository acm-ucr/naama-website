const MentorshipCard = () => {
  return (
    <div className="flex w-fit justify-center">
      <div className="bg-naama-ivory-100 shadow-3xl flex flex-col items-center rounded-3xl p-5 text-wrap">
        <h1 className="text-naama-blue-200 font-sans-nunito text-xl font-bold">
          Mentorship and Networking
        </h1>
        <p className="text-naama-blue-200 font-sans-nunito mt-3 text-center font-[400]">
          Gain access to a strong network of healthcare professionals and
          mentors who can guide you on your academic and career path.
        </p>
        <img
          src="/mentorshipcardicon.svg"
          alt="Icon"
          className="h-12 w-12 self-end"
        />
      </div>
    </div>
  );
};

export default MentorshipCard;
