import { useState } from 'react';
import {ethers, BigNumber } from 'ethers';
//import contractJson from '';

const contractAddress = "";

interface Props {
  currentAccount: string | undefined;
  setCurrentAccount: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Mint: React.FC<Props> = ({currentAccount, setCurrentAccount}) => {
  const isConnected = Boolean(currentAccount);


  return (
    <div>
      <h1>Easy NFT</h1>
    </div>
  )
}

export default Mint;
