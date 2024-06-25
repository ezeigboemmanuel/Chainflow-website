import Image from "next/image";
import React from "react";
import Eth from "../assets/eth.svg";
import Bnb from "../assets/bnb.svg";
import Sol from "../assets/sol.svg";
import Cosmos from "../assets/cosmos.svg";
import Polk from "../assets/polk.svg";
import Thor from "../assets/thor.svg";
import Ava from "../assets/ava.svg";

const Filter = () => {
  const coins = [
    {
      name: "Ethereum",
      Image: Eth,
    },
    {
      name: "BnB",
      Image: Bnb,
    },
    {
      name: "Solana",
      Image: Sol,
    },
    {
      name: "Cosmos",
      Image: Cosmos,
    },
    {
      name: "Polkadot",
      Image: Polk,
    },
    {
      name: "Thorchain",
      Image: Thor,
    },
    {
      name: "Avalanche",
      Image: Ava,
    },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center space-x-3 gap-y-3 mt-8">
      <div className="cursor-pointer px-4 h-[36px] flex justify-center items-center rounded-xl text-sm font-semibold bg-[#DE0505] text-white ">
        All
      </div>

      {coins.map((coin) => (
        <div
          key={coin.name}
          className="cursor-pointer flex justify-center items-center px-4 h-[36px] rounded-xl text-sm font-semibold border border-gray-400"
        >
          <Image src={coin.Image} alt="eth" />
          <p>{coin.name}</p>
        </div>
      ))}

      <div className="cursor-pointer flex justify-center items-center px-4 h-[36px] rounded-xl text-sm font-semibold border border-gray-400">
        <p>Show all</p>
      </div>
    </div>
  );
};

export default Filter;
