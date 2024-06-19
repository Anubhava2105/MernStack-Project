import Shoe from "../../assets/shoe.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./market.css";
const GameDetails = ({ game }) => {

  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/games/${game._id}`);
      }}
    >
      <div className="card-img-container">
        <img src={Shoe}></img>
        <div className="card-overlay">
          <h4>{game.price>0?game.price: "Free"}</h4>
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
    </div>
  );
};
export default GameDetails;
