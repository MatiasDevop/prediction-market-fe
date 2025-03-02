"use client";

import { client } from "@/app/client";
import { baseSepolia } from "thirdweb/chains";
import { ConnectButton, lightTheme } from "thirdweb/react";

import { inAppWallet } from "thirdweb/wallets";

export function Navbar() {
  console.log("Navbar client", client);
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Simple PRediction Market</h1>
      <div className="items-center flex gap-2">
        <ConnectButton
          client={client}
          theme={lightTheme()}
          chain={baseSepolia}
          connectButton={{
            label: "Sign in",
            style: {
              fontSize: "0.75rem !important",
              height: "2.5rem !important",
            },
          }}
          wallets={[inAppWallet()]}
          accountAbstraction={{
            chain: baseSepolia,
            sponsorGas: true,
          }}
        />
      </div>
    </div>
  );
}
