import React, { useState } from 'react';
import './App.css';
import Mint from './components/Mint';
import NavBar from './components/NavBar';
import { ethers } from 'ethers';

const App: React.FC = () => {
  
  const [currentAccount, setCurrentAccount] = useState<string | undefined>(undefined);

  return (
    <div className="App">
      <NavBar currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
      <Mint currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
    </div>
  );
}

export default App;
