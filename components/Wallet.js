"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);
const projectId = "5d10af3027c340310f3a3da64cbcedac";
const { connectors } = getDefaultWallets({
  appName: "dfs",
  projectId,
  chains,
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const Wallet = () => {
  return (
    <div>
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          <ConnectButton
            className="broder-2 border-blue-600 text-blue-600 p-2"
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
          />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
};

export default Wallet;
