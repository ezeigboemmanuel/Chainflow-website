import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.svg";

const page = () => {
  return (
    <div>
      <Link href="/" className="flex items-center">
        <Image src={Logo} alt="logo" />
        <p className="font-semibold">CHAINFLOW</p>
      </Link>

      <h1 className="font-semibold text-xl text-center">INVOICE</h1>
    </div>
  );
};

export default page;
