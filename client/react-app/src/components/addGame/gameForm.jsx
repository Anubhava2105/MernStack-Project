import { useState } from "react";
import { UseGamesContext } from "../../hooks/useGamesContext.jsx";
import { UseAuthContext } from "../../hooks/useAuthContext.jsx";
import "./gameForm.css";
const GameForm = () => {
  const { dispatch } = UseGamesContext();
  const { user } = UseAuthContext();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [info, setInfo] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [release, setRelease] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }

    const game = { name, price, release, publisher, genre, rating, info };

    const response = await fetch("/api/games", {
      method: "POST",
      body: JSON.stringify(game),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
    }
    if (response.ok) {
      setName("");
      setPrice("");
      setPublisher("");
      setGenre("");
      setRating("");
      setRelease("");
      setInfo("");
      setError(null);
      setEmptyFields([]);
      console.log("new game added", json);
      dispatch({ type: "CREATE_GAME", payload: json });
    }
  };

  return (
    <div className="game-form-container">
      <h3>Add a New Game</h3>
      <form className="create" onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={emptyFields.includes("name") ? "error" : ""}
        />
        <label>Price: </label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className={emptyFields.includes("price") ? "error" : ""}
        />
        <label>Publisher: </label>
        <input
          type="text"
          onChange={(e) => setPublisher(e.target.value)}
          value={publisher}
          className={emptyFields.includes("publisher") ? "error" : ""}
        />
        <label>Genre: </label>
        <input
          type="text"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
          className={emptyFields.includes("genre") ? "error" : ""}
        />
        <label>Rating: </label>
        <input
          type="number"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          className={emptyFields.includes("rating") ? "error" : ""}
        />
        <label>Release Date: </label>
        <input
          type="date"
          onChange={(e) => setRelease(e.target.value)}
          value={release}
          className={emptyFields.includes("release") ? "error" : ""}
        />
        <label>Info: </label>
        <textarea
          onChange={(e) => setInfo(e.target.value)}
          value={info}
          rows="4"
          className={emptyFields.includes("info") ? "error" : ""}
        ></textarea>
        <button>Add Game</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default GameForm;
