import React from "react";

function FetchNFT({ wallet, nft, setNft }) {
  const fetchBalance = async () => {
    var requestOptions = {
      method: "GET",
    };
    const baseURL = "https://api.mainnet.tzkt.io/";
    const fetchURL = `${baseURL}v1/tokens/balances?account=${wallet}&token.metadata.artifactUri.null=false`;
    const nft = await fetch(fetchURL, requestOptions).then((data) =>
      data.json()
    );
    console.log(`Nft at account ${wallet} :`, nft);
    setNft(nft);
  };

  return (
    <div>
      <button onClick={fetchBalance}>Get NFT</button>
    </div>
  );
}
export default FetchNFT;
