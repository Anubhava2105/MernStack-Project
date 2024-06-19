import Street from "../../assets/street_fighter.svg";
import "./gameInfo.css";
const GameInfo = (game) => {
  return (
    <div className="game-container">
      <div className="game-img-container">
        <img src={Street} alt="game-info" />
      </div>
      <div className="game-info-container">
        <h2 className="game-name">{game.name}</h2>
        <div className="sub-header-container">
          <h2 className="game-info">{game.publisher}</h2>
          <h2 className="game-info">{game.release}</h2>
        </div>
        <div className="price-info-container">
          <h1>{game.price}</h1>
          <div>
            <h2 className="game-info">{game.rating}</h2>
            <h2 className="game-info">{game.genre}</h2>
          </div>
        </div>
        <div className="game-body">
          <p>{game.info}</p>
        </div>
      </div>
    </div>
  );
};
export default GameInfo;
