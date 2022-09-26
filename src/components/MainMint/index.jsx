import React, { useState } from "react";
import roboPunksNFT from '../../RoboPunksNFT.json';
import { ethers, BigNumber } from 'ethers';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';


function MainMint({ accounts, setAccounts }) {

  const roboPunksNFTAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        roboPunksNFTAddress,
        roboPunksNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log('response: ', response)
      } catch (e) {
        console.log("error: ", e)
        alert("You may dont have gas limit")
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };


  return (
    <div className="container">
      <Box>
        <Text fontSize={"48px"} textShadow={"0 5px #000000"}>RoboPunks</Text>
      </Box>
      <Text
        fontSize={"30px"}
        letterSpacing={"-5.5%"}
        fontFamily={"VT323"}
        textShadow={"0 2px 2px #00000"}>
        It´s 2078. Can the RoboPunks NFT save humans from destructive
        rampant NFT speculation ? Mint RoboPunks to find out.
      </Text>

      {isConnected ? (
        <div>
          <Flex align={"center"} justify={"center"}>
            <Button onClick={handleDecrement}
              backgroundColor="#D6517D"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="0 15px">-</Button>
            <Input readOnly
              fontFamily={"inherit"}
              width={"100px"}
              height={"40px"}
              textAlign={"center"}
              paddingLeft={"19px"}
              value={mintAmount} />
            <Button onClick={handleIncrement}
              backgroundColor="#D6517D"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="0 15px">+</Button>
          </Flex>
          <Button onClick={handleMint}
            backgroundColor="#D6517D"
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            >Mint now</Button>
        </div>
      ) : (<Text
        margin={"70px"}
        fontSize={"30px"}
        letterSpacing={"-5.5%"}
        fontFamily={"VT323"}
        textShadow={"0 3px #00000"}
        color={"#D6517D"}
        >You must be connected to Mint</Text>)}
    </div>
  );
}

export default MainMint;
