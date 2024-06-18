import Shoe from "../../assets/shoe.png";
import './market.css'
const GameDetails=({game})=>{
    return(
        <div className="card">
            <div className="card-img-container">
              <img src={Shoe}></img>
              <h4>{game.price}</h4>
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
              <p>
                {game.info}
              </p>
            </div>
          </div>
    )
}
export default GameDetails;