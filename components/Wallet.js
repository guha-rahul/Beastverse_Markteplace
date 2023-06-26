"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  polygonMumbai,
} from "wagmi/chains";
// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from "wagmi/providers/public";
const { chains, provider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);
const projectId = "hkj";
const { connectors } = getDefaultWallets({
  appName: "",
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
          <ConnectButton />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
};

export default Wallet;
