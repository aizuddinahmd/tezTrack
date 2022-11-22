import { React, useEffect } from "react";
import NFTCard from "./NFTcard";
import { Row } from "react-bootstrap";

function FetchNFT({ wallet, nft, setNft }) {
  useEffect(() => {
    if (wallet) {
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
      fetchBalance();
    }
  }, [wallet]);

  return (
    <div>
      <div>
        {nft.length &&
          nft.map((nft) => {
            return (
              <Row xs={3} md={1} className="g-4">
                <NFTCard nft={nft} />
              </Row>
            );
          })}
      </div>
    </div>
  );
}
export default FetchNFT;
