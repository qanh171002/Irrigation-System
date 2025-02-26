function Logo() {
  const src = "/logo-light.png";
  return (
    <div className="flex justify-center">
      <img src={src} alt="Logo" className="h-24 w-auto" />
    </div>
  );
}

export default Logo;
