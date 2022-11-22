import React, { useEffect } from "react";

function FetchBalance({ wallet, nativeBalance, setNativeBalance }) {
  useEffect(() => {
    if (wallet) {
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
        setNativeBalance((Number(balance) / 1e6).toFixed(2));
      };
      fetchBalance();
    }
  }, [wallet]);

  return (
    <div>
      <div>
        <h1>Portfolio</h1>
        <p>{nativeBalance} ꜩ</p>
      </div>
    </div>
  );
}

export default FetchBalance;
