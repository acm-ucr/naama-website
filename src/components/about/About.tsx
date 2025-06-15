const AboutUs = () => {
  return (
    <div className="h-fit w-7/8 rounded-4xl bg-white/25 p-5 text-white md:w-1/4">
      <div>
        <h2 className="font-playfair text-4xl font-medium">
          <span className="border-b">About</span>
          <span className="italic"> Us</span>
        </h2>

        <p className="mt-5 text-white">
          Our mission is to provide academic and professional resources, build a
          strong sense of community, and promote cultural representation within
          the medical field. <br /> <br />
          Whether you are looking for guidance, leadership opportunities or a
          way to give back to the community,{" "}
          <strong>NAAMA UCR welcomes you to be part of our journey.</strong>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
