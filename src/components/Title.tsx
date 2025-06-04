interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <p className="text-naama-ivory-100 font-playfair mx-auto w-3/4 pt-20 text-center text-5xl md:text-left">
      {title}
    </p>
  );
};

export default Title;
