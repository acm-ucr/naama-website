const ExploreOurEvents = () => {
  return (
    <div className="bg-naama-blue-100 flex w-screen justify-center gap-5">
      <div className="font-playfair flex-row pl-5 text-white">
        Explore <span className="italic"> Our Events </span>
      </div>
      <div className="font-nunito flex flex-col pr-5 font-bold text-white">
        <div className="">
          <div className="flex font-bold">Workshops</div>
          <div className="flex text-xs">
            Our hands-on workshops provide members with practical skills and
            knowledge essential for careers in healthcare. From clinical
            simulations to professional development sessions, these interactive
            events help students build confidence and expertise.
          </div>
        </div>
        <div className="flex">Guest Speakers</div>
        <div>
          We host distinguished healthcare professionals who share their
          experiences, insights, and advice. These events offer a unique
          opportunity to learn from experts in the field, ask questions, and
          gain valuable mentorship.
        </div>
        <div className="flex">Opportunities</div>
        <div>
          NAAMA connects members with internships, research postions,
          volunteering, and networking events to support their professional
          growth. We strive to provide resources that help students advance in
          their medical and community health careers.
        </div>
      </div>
    </div>
  );
};

export default ExploreOurEvents;
