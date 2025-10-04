import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="border-t border-slate-500">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-8 sm:py-6">
        <div className="flex flex-col items-center justify-center gap-2">
          <Logo textSize={"text-md"} />
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} CPS Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
