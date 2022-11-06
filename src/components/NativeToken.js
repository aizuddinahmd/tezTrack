import React from "react";
import { tezos } from "../utils/tezos";

function NativeToken({
  wallet,
  nativeBalance,
  setNativeBalance,
  //nativeValue,
  //setNativeValue,
}) {
  async function getNativeBalance() {
    setNativeBalance(balance.toNumber());
    console.log(`Account : ${wallet}`);
  }

  return (
    <div>
      <p>
        <button onClick={getNativeBalance}>Fetch Balance</button>
        <br />
        <span>Native Balance: {nativeBalance} xtz</span>
      </p>
    </div>
  );
}

export default NativeToken;
