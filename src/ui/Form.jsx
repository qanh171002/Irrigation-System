const Form = ({ type = "regular", className, ...props }) => {
    return (
      <form
        className={`overflow-hidden text-[1.4rem] ${
          type === "regular"
            ? "max-w-lg w-full mx-auto p-6 bg-gray-50 border border-gray-200 rounded-md shadow-sm"
            : "w-[80rem]"
        } ${className}`}
        {...props}
      />
    );
  };
  
  export default Form;
  