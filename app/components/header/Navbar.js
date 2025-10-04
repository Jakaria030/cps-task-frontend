import Logo from "../Logo";

const Navbar = () => {
  return (
    <div className="border-b border-slate-500 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto px-4 py-6 border-2 border-slate-400">
        <div className="flex items-center justify-between gap-5">
          <Logo />
          <nav>Navlink</nav>
          <div>Login</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
