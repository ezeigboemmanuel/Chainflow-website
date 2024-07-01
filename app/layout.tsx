import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Ethereum } from "@particle-network/chains";
import { ModalProvider } from "@particle-network/connectkit";
import "@particle-network/connectkit/dist/index.css";
import { evmWallets, solanaWallets } from "@particle-network/connectors";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chainflow",
  description: "STREAMLINE YOUR INVOICING WITH CROSS CHAIN TECHNOLOGY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto`}>
        <ModalProvider
          options={{
            projectId: process.env.REACT_APP_PROJECT_ID as string,
            clientKey: process.env.REACT_APP_CLIENT_KEY as string,
            appId: process.env.REACT_APP_APP_ID as string,
            chains: [Ethereum],
            connectors: [
              ...evmWallets({
                projectId: process.env.REACT_APP_WALLETCONNECT_ID,
                showQrModal: true,
              }),
              ...solanaWallets(),
            ],
            erc4337: {
              //optional: account abstraction wallet UI config (displaying the smart account rather than EOA)
              name: "SIMPLE",
              version: "1.0.0",
            },
            wallet: {
              //optional: particle wallet config
              customStyle: {
                supportChains: [Ethereum],
              },
            },
          }}
        >
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
