import React from "react";

function FetchDefi({ wallet, defiBalance, setDefiBalance }) {
  const fetchBalance = async () => {
    var requestOptions = {
      method: "GET",
    };
    const baseURL = "https://api.mainnet.tzkt.io/";
    const fetchURL = `${baseURL}v1/tokens/balances?account=${wallet}&token.metadata.artifactUri.null=true`;
    const balance = await fetch(fetchURL, requestOptions).then((data) =>
      data.json()
    );
    console.log(`Token at account ${wallet} :`, balance);
    setDefiBalance(balance);
  };

  return (
    <div>
      <button onClick={fetchBalance}>Fetch Defi</button>
    </div>
  );
}

export default FetchDefi;
