import React from "react";
import { useRef, useState } from "react";

import FetchBalance from "./FetchBalance";
import FetchDefi from "./FetchDefi";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FetchNFT from "./FetchNFT";

function WalletInput() {
  const inputRef = useRef(null);

  const [wallet, setWallet] = useState("");
  const [nativeBalance, setNativeBalance] = useState(0);
  const [defiBalance, setDefiBalance] = useState([]);
  const [nft, setNft] = useState([]);

  const handleClick = () => {
    setWallet(inputRef.current.value);
    console.log(`${wallet}`);
  };

  return (
    <div>
      <input type={"text"} ref={inputRef} placeholder="Add wallet address" />
      <br />
      <button onClick={handleClick}>Search</button>

      <Tabs
        defaultActiveKey="balance"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="balance" title="Balances">
          <FetchBalance
            wallet={wallet}
            nativeBalance={nativeBalance}
            setNativeBalance={setNativeBalance}
          />
          <FetchDefi
            wallet={wallet}
            defiBalance={defiBalance}
            setDefiBalance={setDefiBalance}
          />
        </Tab>
        <Tab eventKey="nft" title="NFT">
          <FetchNFT wallet={wallet} nft={nft} setNft={setNft} />
        </Tab>
        <Tab eventKey="domain" title="Domain"></Tab>
      </Tabs>
    </div>
  );
}

export default WalletInput;
