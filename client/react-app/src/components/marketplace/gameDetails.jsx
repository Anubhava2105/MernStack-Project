import Shoe from "../../assets/shoe.png";
import { FaTag } from "react-icons/fa";
import { DeleteRounded } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { UseGamesContext } from "../../hooks/useGamesContext";
import { UseAuthContext } from "../../hooks/useAuthContext";
import "./market.css";
const GameDetails = ({ game }) => {
  const { dispatch } = UseGamesContext();
  const { user } = UseAuthContext();
  if (!user) {
    return;
  }
  const handleClick = async () => {
    try {
      const response = await fetch(`/api/games/${game._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      dispatch({ type: "DELETE_GAME", payload: json });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={Shoe}></img>
        <div className="card-overlay">
          <h4>{game.price > 0 ? "Rs." + game.price : "Free"}</h4>
        </div>
      </div>
      <div className="tags-rate-container">
        <div className="genre">
          <h2>{game.genre}</h2>
        </div>
        <div className="rating">
          <h2>{game.rating}</h2>
          <div></div>
        </div>
      </div>
      <div className="body-container">
        <h1>{game.name}</h1>
        <h5>{game.publisher}</h5>
        <p>{game.info}</p>
      </div>
      <div className="edit-option-container">
        <span onClick={handleClick}>
          <DeleteRounded />
          Delete
        </span>
      </div>

      <NavLink to={`gameinfo/${game._id}`}>View Details</NavLink>
    </div>
  );
};
export default GameDetails;
