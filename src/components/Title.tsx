interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <p className="text-naama-ivory-100 font-playfair w-3/4 pt-20 pl-55 text-5xl">
      {title}
    </p>
  );
};

export default Title;
