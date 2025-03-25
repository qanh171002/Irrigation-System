const ButtonIcon = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:bg-primary-50 rounded-md p-2 transition-all duration-200 ${className}`}
    >
      <span className="text-primary-500 flex h-6 w-6 items-center justify-center">
        {children}
      </span>
    </button>
  );
};

export default ButtonIcon;
