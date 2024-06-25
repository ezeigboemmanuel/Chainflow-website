import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/Sponsors";
import Image from "next/image";
import Phone from "../assets/phone.svg";

export default function Home() {
  return (
    <div className="tracking-wide">
      <Navbar />
      <Hero />
      <Sponsors />

      <div className="px-3 pt-20 flex flex-col md:flex-row-reverse md:justify-around justify-center items-center">
        <Image src={Phone} alt="phone" className="md:w-80" />
        <div className="md:w-1/2">
          <h2 className="font-semibold mt-4 mb-3 text-xl">
            Simplify your Financial Transaction
          </h2>
          <p>
            Our platform allows you to create and manage invoices seamlessly
            across different blockchain networks. No more juggling multiple
            platforms - handle all your invoicing needs in one place.
          </p>
        </div>
      </div>

      <div className="pt-14 px-3 md:pl-20 max-w-2xl">
        <h2 className="font-semibold mt-4 mb-3 text-xl">
          Secure and Transparent
        </h2>
        <p>
          Security is our top priority. All transactions are encrypted and
          transparent, ensuring that your financial data is protected and
          immutable on the blockchain.
        </p>
      </div>

      <div className="pt-14 px-3 md:pl-20 max-w-2xl">
        <h2 className="font-semibold mt-4 mb-3 text-xl">Fiat settlement</h2>
        <p>
          Enable users to pay in crypto and get traditional fiat to your bank
          account, mitigating market volatility.
        </p>
      </div>

      <div className="flex flex-col md:flex-row pt-16 px-3 space-y-4 md:space-x-4 justify-center items-center">
        <div className="border border-gray-400 rounded-lg px-2 py-5">
          <h2 className="font-semibold mb-3 text-xl">
            Real-Time Payment Tracking
          </h2>
          <p>
            Stay updated with real-time tracking of invoice statuses and
            payments. Our platform provides instant notifications, so you always
            know when payments are made and received.
          </p>
        </div>
        <div className="border border-gray-400 rounded-lg px-2 py-5">
          <h2 className="font-semibold mb-3 text-xl">Multi-Currency Support</h2>
          <p>
            Support for a wide range of cryptocurrencies ensures that you can
            invoice and receive payments in your preferred digital assets,
            making global business transactions easier than ever.
          </p>
        </div>
        <div className="border border-gray-400 rounded-lg px-2 py-5">
          <h2 className="font-semibold mb-3 text-xl">
            Cost-Effective Solutions
          </h2>
          <p>
            Save on transaction fees and reduce operational costs with our
            efficient invoicing system. By leveraging blockchain technology, we
            offer a cost-effective alternative to traditional invoicing methods.
          </p>
        </div>
      </div>
    </div>
  );
}
