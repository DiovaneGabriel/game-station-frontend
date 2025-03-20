import { useEffect, useState } from "react";

import { useDynavision } from "../../contexts/Dynavision";
import { games64, games94, games101, mario, snes } from "../../data/Cartridge";

import Menu from "../../components/Dynavision/Menu/Menu";
import Panel from "../../components/Dynavision/Panel/Panel";
import Cartridge from "../../components/Cartridge/Cartridge";
import Game from "../../components/Game/Game"

import "./Dynavision.scss";

const Dynavision = () => {
  const { games, setGames, isOn, isPlaying, selectedGame, setIsPlaying, setSelectedGame } = useDynavision();
  const [cartridgeSelected, setCartridgeSelected] = useState(0);

  const setCartridge = (games) => {
    setCartridgeSelected(games);
    if (games == 64) {
      setGames(games64);
    } else if (games == 94) {
      setGames(games94);
    } else if (games == 101) {
      setGames(games101);
    } else if (games == 'snes') {
      setGames(snes);
    } else if (games == 'super_mario') {
      setIsPlaying(true);
      setSelectedGame(mario);
    }
  };

  useEffect(() => {
    setCartridge(94)
  }, []);

  return (
    <div className="dynavision" >
      <Panel short={isOn ? true : false} />
      {
        !isOn ? (
          <div className="cartridges">
            <Cartridge onClick={() => setCartridge(64)} className={cartridgeSelected == 64 ? "active" : ""}>
              <span>64 Games</span>
            </Cartridge>
            <Cartridge onClick={() => setCartridge(94)} className={cartridgeSelected == 94 ? "active" : ""}>
              <span>94 Games</span>
            </Cartridge>
            <Cartridge onClick={() => setCartridge(101)} className={cartridgeSelected == 101 ? "active" : ""}>
              <span>101 Games</span>
            </Cartridge>
            <Cartridge onClick={() => setCartridge('snes')} className={cartridgeSelected == 'snes' ? "active" : ""}>
              <span>snes</span>
            </Cartridge>
            {/* <Cartridge onClick={() => setCartridge('super_mario')} className={`black ${cartridgeSelected == 'super_mario' ? "active" : ""}`} >
              <img src="/images/Super+Mario+Bros.+(World)-image.jpg" />
            </Cartridge> */}
          </div>
        ) : (isPlaying ? <Game game={selectedGame} /> : (games.length > 0 && <Menu />))
      }
    </div >
  );
};

export default Dynavision;
