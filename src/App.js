import { useState } from "react";
import WalletInput from "./components/WalletInput";
import FetchNFT from "./components/FetchNFT";
//import Navbar from "./components/Navbar";
import NFTcard from "./components/NFTcard";
import FetchBalance from "./components/FetchBalance";
import FetchDefi from "./components/FetchDefi";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const App = () => {
  const [wallet, setWallet] = useState("");
  const [nativeBalance, setNativeBalance] = useState(0);
  const [defiBalance, setDefiBalance] = useState([]);
  const [nft, setNft] = useState([]);

  return (
    <div className="h-100">
      <div className="d-flex flex-column justify-content-center align-items-center h-50">
        <div className="py-1">
          <WalletInput wallet={wallet} setWallet={setWallet} />
          <Tabs
            defaultActiveKey="profile"
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
              <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center">
                {nft.length &&
                  nft.map((nft) => {
                    return <NFTcard nft={nft} />;
                  })}
              </div>
            </Tab>
            <Tab eventKey="domain" title="Domain"></Tab>
          </Tabs>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
