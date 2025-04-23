import JoinUsCard from "@/components/joinus/mentorshipcard";

const JoinUs = () => {
  return (
    <div className="bg-naama-blue-300 min-h-screen">
      <h1 className="text-center text-5xl text-white"> Come Join Us</h1>
      <JoinUsCard
        title="Mentorship and Networking"
        description="Gain access to a strong network of healthcare professionals and
          mentors who can guide you on your academic and career path."
      />
    </div>
  );
};

export default JoinUs;
