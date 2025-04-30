import React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="text-naama-ivory-100 bg-naama-blue-200 w-full items-center justify-center p-10">
      <div className="flex h-screen w-screen items-center justify-start pl-20">
        <h1 className="font-playfair text-5xl">{title}</h1>
      </div>
      <div className="bg-naama-ivory-100 mt-4 h-0.5 w-full"></div>
    </div>
  );
};

export default Title;
