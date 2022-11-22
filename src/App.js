//import { useState } from "react";
import WalletInput from "./components/WalletInput";
//import FetchNFT from "./components/FetchNFT";
//import Navbar from "./components/Navbar";
//import NFTcard from "./components/NFTcard";
//import FetchBalance from "./components/FetchBalance";
//import FetchDefi from "./components/FetchDefi";
//import Tab from "react-bootstrap/Tab";

const App = () => {
  return (
    <div className="h-100">
      <div className="d-flex flex-column align-items-center h-50">
        <div className="py-2">
          <p>tz1a1nqSAVrucurePA6iR5hHFXRjQEdG9RW5</p>
          <WalletInput />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
