const Tag = ({ children }) => {
  return (
    <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-[0.8rem] font-medium text-green-600">
      {children}
    </span>
  );
};

export default Tag;
