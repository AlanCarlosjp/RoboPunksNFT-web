import React, { useState } from "react";
import roboPunksNFT from '../../RoboPunksNFT.json';
import {ethers, BigNumber} from 'ethers';


function MainMint({accounts, setAccounts}) {

  const roboPunksNFTAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint(){
    if(window.ethereum){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            roboPunksNFTAddress,
            roboPunksNFT.abi,
            signer
        );
        try{
            const response = await contract.mint(BigNumber.from(mintAmount));
            console.log('response: ', response)
        }catch(e){
            console.log("error: ", e)
        }
    }
}

const handleDecrement = () => {
  if(mintAmount <= 1) return;
  setMintAmount(mintAmount - 1);
};

const handleIncrement = () => {
  if(mintAmount >= 3) return;
  setMintAmount(mintAmount + 1);
};


  return (
    <div>
    <h1>RoboPunks</h1>
    <p>
        It´s 2078. Can the RoboPunks NFT save humans from destructive
        rampant NFT speculation ? Mint RoboPunks to find out.
    </p>

        {isConnected ? (
            <div>
                <div>
                <button onClick={handleDecrement}>-</button>
                <input type="number" value={mintAmount}/>
                <button onClick={handleIncrement}>+</button>
                </div>
                <button onClick={handleMint}>Mint now</button>
            </div>
        ): (<>You must be connected to Mint</>)}
</div>
  );
}

export default MainMint;
