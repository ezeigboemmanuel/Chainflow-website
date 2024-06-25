import Image from "next/image";
import Eth from "../assets/eth.svg";
import Sol from "../assets/sol.svg";
import Wallet from "../assets/wallet.svg";
import Link from "next/link";

const Swap = () => {
  return (
    <div className="mt-20 px-3">
      <div className="border border-gray-400 rounded-xl p-5">
        <div className="flex items-center space-x-3">
          <p>From:</p>
          <div className="cursor-pointer flex justify-center items-center px-4 h-[36px] rounded-xl text-sm font-semibold border border-gray-400">
            <Image src={Eth} alt="eth" />
            <p>Ethereum</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col items-center font-semibold">
            <p>0.0</p>
            <p>$0.00</p>
          </div>

          <div className="">
            <div className="cursor-pointer flex justify-center items-center px-4 h-[36px] rounded-xl text-sm font-semibold border border-gray-400">
              <Image src={Eth} alt="eth" />
              <p>Eth</p>
            </div>
            <div className="flex justify-center items-center px-4 h-[36px] text-sm font-semibold">
              <Image src={Wallet} alt="wallet" />
              <p>0.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-400 rounded-xl p-5 mt-5">
        <div className="flex items-center space-x-3">
          <p>To:</p>
          <div className="cursor-pointer flex justify-center items-center px-4 h-[36px] rounded-xl text-sm font-semibold border border-gray-400">
            <Image src={Sol} alt="sol" />
            <p>Solana</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col items-center font-semibold">
            <p>0.0</p>
            <p>$0.00</p>
          </div>

          <div className="">
            <div className="cursor-pointer flex justify-center items-center px-4 h-[36px] rounded-xl text-sm font-semibold border border-gray-400">
              <Image src={Sol} alt="sol" />
              <p>Sol</p>
            </div>
            <div className="flex justify-center items-center px-4 h-[36px] text-sm font-semibold">
              <Image src={Wallet} alt="wallet" />
              <p>0.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col">
        <div className="bg-[#DE0505] text-white font-semibold py-4 w-full rounded-xl text-center cursor-pointer">
          Swap
        </div>
        <Link
          href="/invoice"
          className="bg-[#DE0505] mt-3 text-white font-semibold py-4 w-full rounded-xl text-center cursor-pointer"
        >
          Generate Invoice
        </Link>
      </div>
    </div>
  );
};

export default Swap;
