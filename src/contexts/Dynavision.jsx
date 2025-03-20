import { createContext, useState, useEffect, useContext } from "react";

import sound from "../assets/dynavision/menu.mp3";

const Context = createContext();

const DynavisionProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [isOn, setIsOn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedGame, setSelectedGame] = useState(0);
  const [cursorItem, setCursorItem] = useState(1);
  const [page, setPage] = useState(0);

  const [audio, setAudio] = useState(null);

  const power = () => {
    if (isOn) {
      setIsPlaying(false);
      setSelectedGame(0);
      setCursorItem(1);
      setPage(0);

      audio ? audio.pause() : null;
      setAudio(null);
      setIsOn(false);

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    } else {
      setIsOn(true);
      !isPlaying ? setAudio(new Audio(sound)) : null;
      document.documentElement.requestFullscreen();
    }
  };

  const reset = () => {
    if (isOn) {
      setIsPlaying(false);
      setSelectedGame(0);
      setCursorItem(1);
      setPage(0);

      audio ? audio.pause() : null;
      setAudio(null);
      setAudio(new Audio(sound));
    }
  };

  useEffect(() => {
    if (audio) {
      audio.play();
      audio.addEventListener("ended", () => audio.play());
    }
  }, [audio]);

  useEffect(() => {
    if (isPlaying) {
      audio ? audio.pause() : null;
      setAudio(null);
    }
  }, [isPlaying]);

  // useEffect(() => {
  //   if (!isOn) {
  //     setAudio(new Audio(sound));
  //   } else {
  //     audio.pause();
  //     setAudio(null);
  //   }
  // }, [isOn]);

  // useEffect(() => {
  //   // setIsLoading(isLoading + 1);
  //   // client
  //   //   .get(`/api/list/cartridge-games/dynavision`)
  //   //   .then((response) => {
  //   //     setGames(response.data);
  //   //   })
  //   //   .finally(() => {
  //   //     setIsLoading(isLoading - 1);
  //   //   });

  //   setGames(games101);

  // }, []);

  //   useEffect(() => {
  //     const handleKeyDown = (event) => {
  //       console.log(event.keyCode);
  //       if (event.keyCode === 27 && playing) {
  //         setPlaying(false);
  //       }
  //     };

  //     document.addEventListener("keydown", handleKeyDown);

  //     return () => {
  //       document.removeEventListener("keydown", handleKeyDown);
  //     };
  //   }, [playing]);

  const exposed = {
    games, setGames,
    isOn, setIsOn,
    isPlaying, setIsPlaying,
    selectedGame, setSelectedGame,
    cursorItem, setCursorItem,
    page, setPage,
    power,
    reset,
  };


  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useDynavision = () => useContext(Context);

export default DynavisionProvider;
