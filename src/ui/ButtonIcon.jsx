const ButtonIcon = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md p-2 transition-all duration-200 hover:bg-gray-100 ${className}`}
    >
      <span className="flex h-6 w-6 items-center justify-center text-green-600">
        {children}
      </span>
    </button>
  );
};

export default ButtonIcon;
