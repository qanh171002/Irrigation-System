function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium ${className}`}
    >
      {children}
    </span>
  );
}

export default Tag;
