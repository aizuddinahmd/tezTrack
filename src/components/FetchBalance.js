import React from "react";

function FetchBalance({ wallet, nativeBalance, setNativeBalance }) {
  const fetchBalance = async () => {
    var requestOptions = {
      method: "GET",
    };
    const baseURL = "https://api.mainnet.tzkt.io/";
    const fetchURL = `${baseURL}v1/accounts/${wallet}/balance`;
    const balance = await fetch(fetchURL, requestOptions).then((data) =>
      data.json()
    );
    console.log(`Balance at account ${wallet} :`, balance);
    setNativeBalance(balance);
  };

  return (
    <div>
      <button onClick={fetchBalance}>Search</button>
      <div>
        <h1>Portfolio</h1>
        <p>
          Balance at {wallet} is {nativeBalance}XTZ
        </p>
      </div>
    </div>
  );
}

export default FetchBalance;
