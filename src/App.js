import React, { useState } from "react";
import MainMint from "./components/MainMint";
import NavBar from "./components/NavBar";


function App() {

  const [accounts, setAccounts] = useState([]);

  
  return (
    <div>
        <NavBar accounts={accounts} setAccounts={setAccounts}/>
    </div>
  );
}

export default App;
