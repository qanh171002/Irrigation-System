const Form = ({ type = "regular", className, ...props }) => {
  return (
    <form
      className={`overflow-hidden text-[1.4rem] ${
        type === "regular"
          ? "mx-auto w-full max-w-lg rounded-md border border-gray-200 bg-gray-50 p-6 shadow-sm"
          : "w-[80rem]"
      } ${className}`}
      {...props}
    />
  );
};

export default Form;
