import { React, useEffect } from "react";
import { connectWallet, getAccount } from "../utils/wallet";

function ConnectButton({ Tezos, wallet, setWallet, setUserAddress }) {
  useEffect(() => {
    (async () => {
      // TODO 5.b - Get the active account
      const wallet = await getAccount();
      setWallet(wallet);
    })();
  });

  const onConnectWallet = async () => {
    await connectWallet();
    const wallet = await getAccount();
    setWallet(wallet);
  };
  return (
    <div>
      <button onClick={onConnectWallet}>
        {" "}
        {wallet ? wallet : "Connect Wallet"}
      </button>
    </div>
  );
}

export default ConnectButton;
