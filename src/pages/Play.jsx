import { useLocation } from "react-router-dom";
import Game from "../components/Game/Game";

const Play = () => {
  const location = useLocation();
  const game_id = location.pathname.split("/")[2];

  return <Game gameId={game_id} />;
};

export default Play;
