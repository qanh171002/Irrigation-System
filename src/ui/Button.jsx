const Button = ({ size = "medium", variation = "primary", className, ...props }) => {
    const sizeClasses = {
      small: "text-xs py-1 px-2 uppercase font-semibold text-center",
      medium: "text-sm py-3 px-4 font-medium",
      large: "text-lg py-3 px-6 font-medium",
    };
  
    const variationClasses = {
      primary: "text-green-50 bg-green-600 hover:bg-green-700",
      secondary: "text-gray-600 bg-white border border-gray-200 hover:bg-gray-50",
      danger: "text-red-100 bg-red-700 hover:bg-red-800",
    };
  
    return (
      <button
        className={`transition-colors duration-300 rounded shadow-sm border-none ${sizeClasses[size]} ${variationClasses[variation]} ${className}`}
        {...props}
      />
    );
  };
  
  export default Button;
  