import React from "react";

function WalletInput({ wallet, setWallet, setNativeBalance }) {
  const fetchBalance = async () => {
    var requestOptions = {
      method: "GET",
    };
    const baseURL = "https://api.ghostnet.tzkt.io/";
    const fetchURL = `${baseURL}v1/accounts/${wallet}/balance`;
    const balance = await fetch(fetchURL, requestOptions).then((data) =>
      data.json()
    );
    console.log(`Balance at account ${wallet} :`, balance);
    setNativeBalance(balance);
  };

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
      <button onClick={fetchBalance}>Get Balance</button>
    </div>
  );
}

export default WalletInput;
