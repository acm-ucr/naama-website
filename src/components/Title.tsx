import React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="text-naama-ivory-100 font-playfair w-3/4 pt-20 text-5xl">
      {title}
    </h1>
  );
};

export default Title;
