const ButtonIcon = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-md transition-all duration-200 hover:bg-gray-100 ${className}`}
    >
      <span className="w-6 h-6 text-green-600 flex items-center justify-center ">
        {children}
      </span>
    </button>
  );
};

export default ButtonIcon;
