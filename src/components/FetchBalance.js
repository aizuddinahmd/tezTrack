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

  return <div>{wallet ? fetchBalance() : null}</div>;
}

export default FetchBalance;
