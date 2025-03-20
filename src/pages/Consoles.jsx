import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../axios";

const Consoles = () => {
  const [loading, setLoading] = useState(false);
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    setLoading(true);
    client
      .get("/api/list/consoles")
      .then((response) => {
        setConsoles(response.data);
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
  ) : consoles.length > 0 ? (
    <ul>
      {consoles.map((console) => {
        return (
          <li key={console.id}>
            <Link to={`/games/${console.id}`}>{console.name}</Link>;
          </li>
        );
      })}
    </ul>
  ) : (
    <p>nenhum registro encontrado</p>
  );
};

export default Consoles;
