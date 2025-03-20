import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import client from "../../axios";

const Games = () => {
  const location = useLocation();
  const console_id = location.pathname.split("/")[2];
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    setLoading(true);
    client
      .get(`/api/list/games/${console_id}`)
      .then((response) => {
        // Processar a resposta
        // console.log(response.data);
        setGames(response.data);
      })
      //   .catch((error) => {
      //     // Tratar erros
      //     console.error(error);
      //   })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <p>Carregando...</p>
  ) : games.length > 0 ? (
    <ul>
      {games.map((game) => {
        return (
          <li key={game.id}>
            <Link to={`/play/${game.id}`}>{game.name}</Link>;
          </li>
        );
      })}
    </ul>
  ) : (
    <p>nenhum registro encontrado</p>
  );
};

export default Games;
