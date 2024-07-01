"use client";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MetaMask from "../assets/metamask.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex items-center justify-between bg-white py-4">
      <Link href="/" className="flex items-center">
        <Image src={Logo} alt="logo" />
        <p className="font-semibold">CHAINFLOW</p>
      </Link>

      <div className="pr-3 flex">
        <div className="hidden md:flex items-center space-x-4 font-semibold md:mr-10">
          <Link href="/swap" className="cursor-pointer font-semibold">Swap</Link>
          <p className="cursor-pointer">industry solution</p>
          <p className="cursor-pointer">currrencies</p>
        </div>
        {/* Change the Get started after connecting */}
        
          <div className="flex justify-center items-center border border-gray-400 px-2 py-3 rounded-xl font-semibold">
            <ConnectButton />
          </div>
      </div>
    </div>
  );
};

export default Navbar;
