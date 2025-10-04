import Link from "next/link";

const Logo = ({ textSize }) => {
  return (
    <Link href="/">
      <div
        className={`${textSize} font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-yellow-500`}
      >
        &lt;CPS Academy&gt;
      </div>
    </Link>
  );
};

export default Logo;
