const Input = ({ className, ...props }) => {
    return (
      <input
        className={`w-full text-sm border border-gray-300  bg-gray-50 rounded-sm p-2 shadow-2xs focus:outline-none focus:ring-2 focus:ring-green-600 disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
        {...props}
      />
    );
  };

export default Input;