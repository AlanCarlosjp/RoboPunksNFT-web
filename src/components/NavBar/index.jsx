import React from "react";


function NavBar({accounts, setAccounts}) {

    const isConnected = Boolean(accounts[0]);

    async function connectAccounts(){
    
        if(window.ethereum){
           await window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((res) => {
                setAccounts(res)});
        }else{
            alert("install metamask extension!!")
        }
    }


  return (
    <div>
    {}
    <div>linkedin</div>
    <div>Email</div>
    <div>About</div>
    <div>Mint</div>
    <div>Team</div>

    {isConnected ? (
        <p>Connected</p>
    ): (
        <button onClick={connectAccounts}>Connect</button>
    )}

    </div>
  );
}

export default NavBar;
