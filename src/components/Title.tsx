import React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="text-naama-ivory-100 w-3/4 pt-40">
      <div className="flex h-screen w-screen pl-20">
        <div className="font-playfair text-5xl">{title}</div>
      </div>
    </div>
  );
};

export default Title;
