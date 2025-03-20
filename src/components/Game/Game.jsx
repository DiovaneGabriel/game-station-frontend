import { useState } from "react";
import "./Game.scss";
import Loading from "../Loading/Loading";

const Game = ({ game }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className={`game ${isLoading ? "hidden" : ""}`}>
        <iframe
          src={`/play.html?game_id=${game.id}&file=${game.file}&oldCores=${game.oldCores ? 1 : 0}&console=${game.console}`}
          onLoad={handleLoad}
        ></iframe>
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default Game;
