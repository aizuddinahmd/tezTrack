import React from "react";

function WalletInput({ wallet, setWallet, setNativeBalance }) {
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
    </div>
  );
}

export default WalletInput;
