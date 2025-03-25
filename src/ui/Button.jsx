const Button = ({
  size = "medium",
  variation = "primary",
  className,
  ...props
}) => {
  const variationClasses = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-lg",
    secondary:
      "bg-white text-neutral-700 border border-neutral-200 hover:border-primary-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeClasses = {
    small: "text-xs px-3 py-1.5 rounded-lg",
    medium: "text-sm px-4 py-2 rounded-xl",
    large: "text-base px-6 py-3 rounded-xl",
    xlarge: "text-lg px-8 py-4 rounded-xl",
  };

  return (
    <button
      className={`rounded border-none shadow-sm transition-colors duration-300 ${sizeClasses[size]} ${variationClasses[variation]} ${className}`}
      {...props}
    />
  );
};

export default Button;
