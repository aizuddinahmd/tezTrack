import React from "react";

function WalletInput({ wallet, setWallet }) {
  return (
    <div>
      <input
        type={"text"}
        onChange={(e) => {
          setWallet(e.target.value);
        }}
        value={wallet}
        placeholder="Add wallet address"
      />
      <br />
      <button onClick={(e) => setWallet(e.target.value)}>Get Balance</button>
    </div>
  );
}

export default WalletInput;
