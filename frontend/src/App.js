import './App.css';
import { useRef } from 'react';
import { ethers } from 'ethers'; 
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core';

const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.RPC_URL}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});
 
const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
});

async function App() {

  const provider = useRef(undefined);
  const { activate, deactivate, active, chainId, account } = useWeb3React();

  async function connectWallet() {
    provider.current = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
  };

  provider.current.on("accountsChanged", (accounts) => {
    console.log(accounts);
  });

  provider.current.on("chainChanged", (chainId) => {
    console.log(chainId);
  });

  /* disconnect
  await provider.disconnect()
  await web3modal.clearCacheProvider()
  */

  connectWallet();

  return (
    <div className="App">
      hell oworld
      <button onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>
      <button onClick={() => { activate(Injected) }}>Metamask</button>
      <button onClick={deactivate}>Disconnect</button>
      <div>Connection Status: {active}</div>
      <div>Account: {account}</div>
      <div>Network ID: {chainId}</div>
    </div>
  );
}

export default App;
