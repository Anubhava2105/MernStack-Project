import React, { useEffect } from "react";
import { UseGamesContext } from "../../hooks/useGamesContext.jsx";
import AddIcon from "@mui/icons-material/Add.js";
import "./market.css";
import GameDetails from "./gameDetails.jsx";
import GameForm from "../addGame/gameForm.jsx";
import GameInfo from "./gameInfo.jsx";
import Popup from "reactjs-popup";
const Market = () => {
  const { games, dispatch } = UseGamesContext();
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/games");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          dispatch({ type: "SET_GAME", payload: data });
        } else {
          const text = await response.text();
          console.warn("Response is not JSON:", text);
        }
      } catch (error) {
        console.error("Fetch error: " + error.message);
      }
    };
    fetchGames();
  }, [dispatch]);

  return (
    <div className="market-container">
      <h1 className="market-header">Games</h1>
      <h2 className="market-subheader">
        Here is the latest collection of games:
      </h2>
      <Popup
        trigger={
          <button className="add-button">
            <AddIcon /> Add New Game
          </button>
        }
        position="left center"
        modal
      >
        <div className="modal">
          <GameForm />
        </div>
      </Popup>

      <div className="card-container">
        {games.map((game) => (
          <GameDetails key={game._id} game={game} />
        ))}
        {/* <h3 className="market-subheader">Could not find what you were looking for...</h3> */}
      </div>
    </div>
  );
};

export default Market;
