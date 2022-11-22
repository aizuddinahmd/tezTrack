import { React, useEffect } from "react";
import { Table } from "react-bootstrap";

function FetchDefi({ wallet, defiBalance, setDefiBalance }) {
  useEffect(() => {
    if (wallet) {
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
      fetchBalance();
    }
  }, [wallet]);

  return (
    <div>
      <p>DeFi Balance</p>
      <Table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {defiBalance.map((defi) => (
            <tr key={defi.id}>
              <td>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={defi.token.metadata.thumbnailUri}
                />
              </td>
              <td>{defi.token.metadata.name}</td>
              <td>
                {defi.balance}&nbsp;&nbsp;
                {defi.token.metadata.symbol}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table />
    </div>
  );
}

export default FetchDefi;
