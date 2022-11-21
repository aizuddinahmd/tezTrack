import React from "react";

function NFTcard({ nft }) {
  return (
    <div className="w-1/4 flex flex-col ">
      <div className="rounded-md">
        <img
          className="object-cover h-128 w-full rounded-t-md"
          style={{ maxHeight: "200px", objectFit: "cover" }}
          key={nft.tokenId}
          src={
            "https://ipfs.io/ipfs/" + nft.token.metadata.artifactUri.slice(7)
          }
          alt={nft.token.metadata.artifactUri.description}
        ></img>
      </div>
      <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
        <div className="">
          <h2 className="text-xl text-gray-800">{nft.token.metadata.name}</h2>
          <p className="text-gray-600">Id: {nft.token.tokenId}</p>
        </div>
      </div>
    </div>
  );
}

export default NFTcard;
