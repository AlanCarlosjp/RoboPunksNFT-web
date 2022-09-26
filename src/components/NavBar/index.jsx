import React from "react";
import { Box, Button, Flex, Spacer } from '@chakra-ui/react';

function NavBar({ accounts, setAccounts }) {

    const isConnected = Boolean(accounts[0]);

    async function connectAccounts() {

        if (window.ethereum) {
            await window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => {
                    setAccounts(res)
                });
        } else {
            alert("install metamask extension!!")
        }
    }


    return (
        <Flex justify="space-between" align="center" padding="30px 30px">
            
            <Flex justify="space-around" width="40%" padding="0 75px">
                <a href="https://www.linkedin.com/in/alan-carlos-vieira-de-paula-júnior-8b5bb21ab/">
                    linkedin
                </a>
            </Flex>
            <Flex justify="space-around"
            align="center"
            width="40%"
            padding="30px">
                <Box margin="0 15px">About</Box>
                <Spacer />
                <Box margin="0 15px">Mint</Box>
                <Spacer />
                <Box margin="0 15px">Team</Box>
            </Flex>
            {isConnected ? (
                <Box margin="0 15px">Connected</Box>
            ) : (
                <Button onClick={connectAccounts}
                backgroundColor="#D6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px">Connect</Button>
            )}

        </Flex>
    );
}

export default NavBar;
