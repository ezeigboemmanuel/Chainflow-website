import Image from "next/image";
import Sponsor1 from "../assets/sponsor1.svg";
import Sponsor2 from "../assets/sponsor2.svg";
import Sponsor3 from "../assets/sponsor3.svg";
import Sponsor4 from "../assets/sponsor4.svg";

const Sponsors = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 pt-20 justify-center items-center">
      <div>
        <Image src={Sponsor1} alt="sponsor" className="w-48" />
      </div>
      <div>
        <Image src={Sponsor2} alt="sponsor" className="w-48" />
      </div>
      <div>
        <Image src={Sponsor3} alt="sponsor" className="w-48" />
      </div>
      <div>
        <Image src={Sponsor4} alt="sponsor" className="w-48" />
      </div>
    </div>
  );
};

export default Sponsors;
