import Filter from "@/components/Filter";
import Navbar from "@/components/Navbar";
import Swap from "@/components/Swap";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Filter />
      <Swap />
    </div>
  );
};

export default page;
