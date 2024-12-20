//react redux
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetPlayersQuery } from "../store/PlayersListSlice";

//react bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

//components
// import NewPlayerForm from "./NewPlayerForm";
import PlayerListItem from "./PlayerListItem";
import Navigation from "./Navigation";

//css
import "./css/PlayersList.css";

export default function PlayersList() {

  //navigate hook
  const navigate = useNavigate();
  
  //state
  const [playersList, setPlayersList] = useState([]);
  const [searchKey, setSearchKey] = useState("");

// GET players from store/api.
  const {
    data: updatedPlayersList,
    isLoading,
    isSuccess,
  } = useGetPlayersQuery();

  const viewPlayerDetails = (id) => {
    navigate(`/players/${id}`);
  };

  //filter function for players array..
  function filterPlayersList(player) {
    return player.name.toLowerCase().startsWith(searchKey.toLowerCase());
  }

  useEffect(() => {
    // console.log('updated players list', updatedPlayersList);
    
    if (updatedPlayersList?.data?.players)
      setPlayersList(updatedPlayersList.data.players);
  }, [updatedPlayersList]);

  // add a timeout to demo loading..
  if (isLoading) {
    return <p>Players loading...</p>;
  }

  if (isSuccess) {
    const filteredList = playersList.filter(filterPlayersList);
    if (filteredList.length > 0) {
      return (
        <div>
          <Navigation setSearchKey={setSearchKey} />
          <div className="players-list-container">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Breed</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredList.map((p) => (
                  <PlayerListItem key={p.id} player={p} />
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {/* <Navigation setSearchKey={setSearchKey} /> */}
          <Navigation setSearchKey={setSearchKey} />
          <p>Aww..no puppy chow!</p>
        </div>
      );
    }
  }
}

// const filteredList = playersList.filter(filterPlayersList);
// if (filteredList.length > 0) {
// return (

// <div>
//   {filteredList.map((p) => (
//     <PlayerListItem key={p.id} player={p} />
//   ))}
// </div>
// );
// }
// }
// }
// return (
//   <div className="">
//     {isSuccess && <SearchForm setSearchKey={setSearchKey} />}
//       {isSuccess && playersList.filter(filterPlayersList).map((p) => (
//       <PlayerListItem key={p.id} player={p} />
//       ))}
//   </div>
