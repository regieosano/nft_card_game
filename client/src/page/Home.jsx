import React, {useState} from 'react'
import { PageHOC, CustomInput } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {

  const { contract, walletAddress } = useGlobalContext();
  const [playerName, setPlayerName] = useState("")

  return (
    <div>
      <h1 className="flex flex-col">
        <CustomInput 
            label="Name"
            placeholder="Enter your player name"
            value={playerName}
            handleValueChange={setPlayerName}
        />
      </h1>
    </div>
  )
};

export default PageHOC(
  Home,
  <>Welcome to Regie Gods <br /> a Web3 NFT Card Game</>,
  <>Connect your wallet to start playing <br /> the ultimate 
  Web3 Battle Card Game</>
 );