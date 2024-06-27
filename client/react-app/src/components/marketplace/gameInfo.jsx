import React, { useEffect } from "react";
import { MdEdit } from "react-icons/md";
import Popup from "reactjs-popup";
import Street from "../../assets/street_fighter.svg";
import { useParams } from "react-router-dom";
import { UseAuthContext } from "../../hooks/useAuthContext";
import { UseGamesContext } from "../../hooks/useGamesContext";
import UpdateForm from "../updateGame/updateForm";
import "./gameInfo.css";

const GameInfo = () => {
  const { games, dispatch } = UseGamesContext();
  const { id } = useParams();
  const { user } = UseAuthContext(); // Assuming you have this hook to get the user context

  useEffect(() => {
    const fetchGame = async () => {
      if (!user) {
        return;
      }

      try {
        const response = await fetch(`/api/games/${id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          dispatch({ type: "SET_SINGLE_GAME", payload: data });
          // setGame(data);
        } else {
          const text = await response.text();
          console.warn("Response is not JSON:", text);
        }
      } catch (error) {
        console.error("Fetch error: " + error.message);
      }
    };

    fetchGame();
  }, [dispatch, user]);

  return (
    <div className="game-container">
      {games.map((item) => (
        <div key={item._id}>
          <div className="game-img-container">
            <img src={Street} alt="game-info" />
          </div>
          <div className="game-info-container">
            <h2 className="game-name">{item.name}</h2>
            <div className="sub-header-container">
              <h2 className="game-info">{item.publisher}</h2>
              <h2 className="game-info">{item.release.split("T")[0]}</h2>
            </div>
            <div className="price-info-container">
              <h1>{item.price > 0 ? item.price : "Free"}</h1>
              <div>
                <h2 className="game-info">{item.rating}</h2>
                <h2 className="game-info">{item.genre}</h2>
              </div>
            </div>
            <div className="game-body">
              <p>{item.info}</p>
            </div>
            <Popup
              trigger={
                <button className="edit">
                  <MdEdit />
                  Edit
                </button>
              }
              position="bottom center"
              modal
            >
              <div className="modal">
                <UpdateForm />
              </div>
            </Popup>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameInfo;
