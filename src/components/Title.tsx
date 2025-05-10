import React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="text-naama-ivory-100 flex w-3/4 py-28">
      <h1 className="font-playfair text-5xl">{title}</h1>
    </div>
  );
};

export default Title;
