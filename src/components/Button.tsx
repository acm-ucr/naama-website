const ArrowIcon = () => {
  return (
    <svg
      className="mt-1"
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4243 5.42426C15.6586 5.18995 15.6586 4.81005 15.4243 4.57574L11.6059 0.757359C11.3716 0.523045 10.9917 0.523045 10.7574 0.757359C10.523 0.991674 10.523 1.37157 10.7574 1.60589L14.1515 5L10.7574 8.39411C10.523 8.62843 10.523 9.00833 10.7574 9.24264C10.9917 9.47696 11.3716 9.47696 11.6059 9.24264L15.4243 5.42426ZM0 5.6H15V4.4H0V5.6Z"
        fill="#25459A"
      />
    </svg>
  );
};

const Button = ({ text }: { text: string }) => {
  return (
    <button className="font-playfair text-naama-blue-200 transfrom flex items-center space-x-3 rounded-full bg-white px-6 py-2 text-xl drop-shadow-xl transition-transform hover:scale-110">
      <span>{text}</span>
      <ArrowIcon />
    </button>
  );
};

export default Button;
