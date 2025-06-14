"use client";

import { HiOutlineUserGroup } from "react-icons/hi2";
import { Stethoscope, HandHeart } from "lucide-react";
import JoinUsCard from "@/components/home/JoinCard";
import { motion } from "motion/react";

const JoinUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="flex flex-col items-center justify-center gap-6 px-4 sm:px-8 md:flex-row">
        <JoinUsCard
          title="Mentorship and Networking"
          description="Gain access to a strong network of healthcare professionals and
          mentors who can guide you on your academic and career path."
          icon={HiOutlineUserGroup}
        />
        <JoinUsCard
          title="Professional Development"
          description="Participate in workshops, guest speaker events, and hands-on experiences that enhance your medical and healthcare career prospects."
          icon={Stethoscope}
        />
        <JoinUsCard
          title="Community and Advocacy"
          description="Join a community that celebrates Arab American culture while engaging in meaningful outreach and service projects that make a difference."
          icon={HandHeart}
        />
      </div>
    </motion.div>
  );
};

export default JoinUs;
