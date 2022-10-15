import React from "react";

interface Props {
  currentAccount: string | undefined;
  setCurrentAccount: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const NavBar: React.FC<Props> = ({currentAccount, setCurrentAccount}) => {
  const isConnected = Boolean(currentAccount);

  async function connectAccount() {
    // WalletConnect
  }

  return (
    <div>
      {/* left side */}
      

      {/* right side */}
      {isConnected ? (
        <p>Connected</p>
      ) : (
        <button onClick={connectAccount}>Connect</button>
      )}

    </div>
  )
}

export default NavBar;