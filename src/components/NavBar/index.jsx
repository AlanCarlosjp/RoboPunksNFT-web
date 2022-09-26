import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';

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
            { }
            <Flex justify="space-around" width="40%" padding="0 75px">
                <a href="https://www.linkedin.com/in/alan-carlos-vieira-de-paula-júnior-8b5bb21ab/">
                    linkedin
                </a>
            </Flex>
            <div>Email</div>
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

            {isConnected ? (
                <p>Connected</p>
            ) : (
                <button onClick={connectAccounts}>Connect</button>
            )}

        </Flex>
    );
}

export default NavBar;
