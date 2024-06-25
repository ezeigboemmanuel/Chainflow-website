import Image from "next/image";
import Coin from "../assets/coin.svg";
import Coins1 from "../assets/coins1.svg";
import Coins2 from "../assets/coins2.svg";

const Hero = () => {
  return (
    <div className="h-[50vh] md:h-[80vh] bg-[#C70404] text-white flex items-center px-4 md:px-8 relative">
      <div className="flex flex-col z-10">
        <h1 className="font-semibold text-2xl md:text-4xl md:leading-relaxed">
          STREAMLINE YOUR INVOICING <br /> WITH CROSS CHAIN TECHNOLOGY
        </h1>
        <p className="font-normal mt-6">
          Effortless,secure,and transparent invoicing across multiple Blockchain
        </p>

        <div className="flex bg-white rounded-xl px-5 py-3 text-black place-self-end mt-6 space-x-2 md:-mr-40">
          <Image src={Coin} alt="coin" />
          <div>
            <p>Payment Received</p>
            <p>1000usdt</p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col absolute right-[25%] ">
        <Image src={Coins1} alt="coins" />
        <Image src={Coins2} alt="coins" />
      </div>
    </div>
  );
};

export default Hero;
