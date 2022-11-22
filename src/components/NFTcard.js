import React from "react";
import { Card } from "react-bootstrap";

function NFTcard({ nft }) {
  return (
    <Card>
      <Card.Img
        className="object-cover h-128 w-full rounded-t-md"
        style={{ maxHeight: "200px", objectFit: "cover" }}
        key={nft.tokenId}
        src={"https://ipfs.io/ipfs/" + nft.token.metadata.artifactUri.slice(7)}
        alt={nft.token.metadata.artifactUri.description}
      />
      <Card.Body>
        <Card.Text>
          <h2 className="text-xl text-gray-800">{nft.token.metadata.name}</h2>
          <p className="text-gray-600">Id: {nft.token.tokenId}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NFTcard;
