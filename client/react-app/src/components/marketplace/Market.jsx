import React, { useEffect, useState } from "react";
import "./market.css";
import GameDetails from "./gameDetails.jsx";

const Market = () => {
  const [games, setGames] = useState([]);

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
          setGames(data);
        } else {
          const text = await response.text();
          console.warn("Response is not JSON:", text);
        }
      } catch (error) {
        console.error("Fetch error: " + error.message);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="market-container">
      <h1 className="market-header">Games</h1>
      <h2 className="market-subheader">
        Here is the latest collection of games:
      </h2>
      <div className="card-container">
        {games.map((game) => (
          <GameDetails key={game._id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Market;
