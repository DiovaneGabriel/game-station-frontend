import { useEffect, useState } from "react";

import MenuItem from "./MenuItem";
import { useDynavision } from "../../../contexts/Dynavision";

import background from "../../../assets/dynavision/menu.png";
import submenuBackground from "../../../assets/dynavision/submenu.png";

import "./Menu.scss";

const Menu = () => {

  const [pages, setPages] = useState([]);
  const [pageGames, setPageGames] = useState([]);
  const { games, setIsPlaying, setSelectedGame, cursorItem, setCursorItem, page, setPage } = useDynavision();

  const enterMenu = () => {
    if (!page) {
      setPageGames(games.slice((cursorItem - 1) * 10, cursorItem * 10));
      setPage(cursorItem);
      setCursorItem(1);
    } else {
      setIsPlaying(true);

      setSelectedGame(pageGames[cursorItem - 1]);
      setCursorItem(1);
      setPage(0);
    }
  };
  const escMenu = (event) => {
    if (event !== undefined) {
      event.preventDefault();
    }

    if (page > 0) {
      setCursorItem(page);
      setPage(0);
    }
  };

  const createArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }

  useEffect(() => {
    setPages(createArray(Math.ceil(games.length / 10)));
  }, [games]);

  useEffect(() => {

    const handleKeyDown = (event) => {
      const length = page
        ? pageGames.length
        : pages.length;

      const enter = [13, 90];
      const esc = [27, 88, 32];
      const up = [38, 87];
      const down = [40, 83];

      if (down.includes(event.keyCode)) {
        if (cursorItem < length) {
          setCursorItem(cursorItem + 1);
        } else {
          setCursorItem(1);
        }
      } else if (up.includes(event.keyCode)) {

        if (cursorItem > 1) {
          setCursorItem(cursorItem - 1);
        } else {
          setCursorItem(length);
        }
      } else if (enter.includes(event.keyCode)) {
        enterMenu();
      } else if (esc.includes(event.keyCode)) {
        escMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [cursorItem, page, pages]);

  return (
    <div className="old">
      <div className="menu" /*onContextMenu={escMenu}*/>
        <img
          src={page ? submenuBackground : background}
          alt="background"
          className="background"
        />
        {!page ? (
          <span className="count-games">{`${games.length} games`}</span>
        ) : (
          <span className="font-white title">{`page : ${page}`}</span>
        )}
        <ul className={page ? "mTop32" : ""}>
          {!page
            ? pages.map((page, index) => {
              return (
                <MenuItem
                  key={index + 1}
                  // onMouseEnter={() => setCursorItem(index + 1)}
                  // onClick={() => enterMenu()}
                  cursorItem={cursorItem}
                  id={index + 1}
                  label={`page : ${index + 1}`}
                />
              );
            })
            : pageGames.map((game, i) => {
              return (
                <MenuItem
                  key={game.id}
                  // onMouseEnter={() => setCursorItem(i + 1)}
                  // onClick={() => enterMenu()}
                  cursorItem={
                    pageGames[cursorItem - 1].id
                  }
                  id={game.id}
                  label={`${i + ((page - 1) * 10) + 1} . ${game.name}`}
                ></MenuItem>
              );
            })}
        </ul>

        <div class="filter-old"></div>
      </div>
    </div>
  );
};

export default Menu;
