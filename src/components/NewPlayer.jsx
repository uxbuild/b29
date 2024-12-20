import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddPlayerMutation } from "../store/NewPlayerSlice";

export default function NewPlayer() {
  //state
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  //store/api
  const [addPlayer] = useAddPlayerMutation();

  //navigate hook
  const navigate = useNavigate();

  async function postPlayer(event) {
    event.preventDefault();
    const imageUrl = "https://loremflickr.com/200/300/dog";
    try {
      const response = await addPlayer({name, breed}).unwrap();
      console.log("response player add:", response);
      navigate("/players");
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div>
      <h2>Add Player</h2>
      <form onSubmit={postPlayer}>
        <label>
          Name
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed
          <input
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <button>Add Player</button>
      </form>
    </div>
  )
}
