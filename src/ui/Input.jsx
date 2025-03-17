const Input = ({ className, ...props }) => {
  return (
    <input
      className={`w-full rounded-sm border border-gray-300 bg-gray-50 p-2 text-sm shadow-2xs focus:ring-2 focus:ring-green-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 ${className}`}
      {...props}
    />
  );
};

export default Input;
