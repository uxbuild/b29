import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetPlayerQuery,
  useDeletePlayerMutation,
} from "../store/PlayerDetailsSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/PlayerDetails.css";
import Navigation from "./Navigation";

export default function PlayerDetails() {
  const { id } = useParams();

  //api actions.
  const {
    data: playerData,
    isSuccess,
    isLoading,
    isError,
  } = useGetPlayerQuery(id);
  const [deletePlayer] = useDeletePlayerMutation();

  // component state.
  const [player, setPlayer] = useState({});

  //navigate
  const navigate = useNavigate();

  // delete player
  function onClickDeletePlayer(e) {
    e.preventDefault();
    if (isSuccess) {
      deletePlayer(player.id);
      navigate("/players");
    }
  }
  //get player details
  useEffect(() => {
    if (isSuccess) {
      // console.log('playerData: ', playerData.data.player);
      setPlayer(playerData.data.player);
      // navigate("/");
    }
  }, [playerData, isSuccess]);

  if (isLoading) {
    return <p>Player details loading..</p>;
  } else if (isError) {
    return <p>Error loading details..</p>;
  } else if (isSuccess) {
    return (
      <div className="container">
        <Navigation />
        {/* test card */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={player.imageUrl} />
          <Card.Body>
            <Card.Title>{player.name}</Card.Title>
            <Card.Text>Breed: {player.breed}</Card.Text>
            <Card.Text>Status: {player.status}</Card.Text>
            <Button variant="danger" onClick={onClickDeletePlayer}>Delete Player</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
