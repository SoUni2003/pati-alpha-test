const LOGO_SRC = "https://trysculptique.com/cdn/shop/files/gempages_567005027885909033-610eea12-3864-40f1-b0bb-802237c7296c.png?v=1756727579";

const Header = () => {
  return (
    <header className="bg-white/95 py-5 shadow-[0px_12px_40px_rgba(0,0,0,0.04)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-page items-center justify-center px-4 sm:px-6">
        <img src={LOGO_SRC} alt="Sculptique" className="h-8 w-auto" loading="lazy" />
      </div>
    </header>
  );
};

export default Header;
