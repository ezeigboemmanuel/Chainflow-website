import Link from "next/link";
import Logo from "../../assets/logo.svg";
import Image from "next/image";
import MetaMask from "../../assets/metamask.svg";

const page = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <Link href="/" className="flex items-center">
        <Image src={Logo} alt="logo" />
        <p className="font-semibold">CHAINFLOW</p>
      </Link>

      <h1 className="font-semibold mt-6 text-xl">CONNECT YOUR WALLET</h1>

      {/* TODO: Onclick event to handle the connecting then redirect to the dashboard once connected */}
      <Link
        href="/dashboard"
        className="flex px-3 py-2 mt-5 border border-gray-400 rounded-xl justify-center items-center"
      >
        <p>Metamask</p>
        <Image src={MetaMask} alt="metamask" />
      </Link>
    </div>
  );
};

export default page;
