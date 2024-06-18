import React, { useEffect, useState } from "react";
import "./market.css";
import GameDetails from './gameDetails.jsx';

const Market = () => {
  const [games, setGames] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('/api/games');
      const json = await response.json();
      if (response.ok) {
        setGames(json);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="market-container">
      <h1 className="market-header">Market</h1>
      <h2 className="market-subheader">
        Here is the latest collection of games:
      </h2>
      <div className="card-container">
        {games && games.map((game) => (
          <GameDetails key={game._id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Market;
