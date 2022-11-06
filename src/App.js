import { useState } from "react";
//import NativeToken from "./components/NativeToken";
import WalletInput from "./components/WalletInput";
import FetchNFT from "./components/FetchNFT";
//import ConnectButton from "./components/ConnectButton";
import Navbar from "./components/Navbar";

const App = () => {
  const [wallet, setWallet] = useState("");
  const [nativeBalance, setNativeBalance] = useState(0);
  const [nft, setNft] = useState([]);
  //const [nativeValue, setNativeValue] = useState(0);
  //const [userBalance, setUserBalance] = useState(0);

  return (
    <div className="h-100">
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center h-50">
        <div className="py-1">
          <WalletInput
            wallet={wallet}
            setWallet={setWallet}
            nativeBalance={nativeBalance}
            setNativeBalance={setNativeBalance}
          />
          <FetchNFT wallet={wallet} nft={nft} setNft={setNft} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
