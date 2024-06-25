import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.svg";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/" className="flex items-center">
        <Image src={Logo} alt="logo" />
        <p className="font-semibold">CHAINFLOW</p>
      </Link>

      <div className="mt-8 px-3">
        <h1 className="font-semibold text-xl text-center mb-6">INVOICE</h1>
        <p className="mb-3">
          <span className="font-semibold">Invoice id:</span> 35031
        </p>
        <p>
          <span className="font-semibold">Date: </span>1st of march 2024
        </p>
      </div>

      <div className="bg-[#DE0505] text-white px-3 mt-8 py-10">
        <h3 className="font-semibold mb-3">Item Description</h3>
        <div className="flex text-sm space-x-1 mt-4 justify-around">
          <div>
            <p className="mb-3 font-semibold">Coin etheruem</p>
            <p>2eth</p>
          </div>
          <div>
            <p className="mb-3 font-semibold">Swap to usdt</p>
            <p>usdt2000</p>
          </div>
          <div>
            <p className="mb-3 font-semibold">Network brige</p>
            <p>Sushi network</p>
          </div>
          <div>
            <p className="mb-3 font-semibold">Total coins</p>
            <p>$2000</p>

            <p className="mt-8 bg-white text-black text-center py-1">$2000</p>
          </div>
        </div>
      </div>

      <div className="px-3 flex space-x-2 mt-8 font-semibold justify-around">
        <p>Payment made back Metamask wallet</p>
        <p>
          Wallet address <br />
          0x023fea234dce8g
        </p>
      </div>
    </div>
  );
};

export default page;
