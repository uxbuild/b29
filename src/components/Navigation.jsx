// react
import React from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// react bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//components
import SearchForm from "./SearchForm";

export default function Navigation({ setSearchKey }) {
  const location = useLocation();
  const params = useParams();
const navigate = useNavigate();
  // const isPlayers = location.pathname == "/players/" ? true : false;
  // const isPlayers = location("/players");
  console.log("pathname", location.pathname);

  function onClickAddPlayer(e){
    e.preventDefault();
    console.log("navigate new player");
    navigate("/newplayer");
  }

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <b>PUPPY BOWL: Players</b>
        </Navbar.Brand>
        <Navbar>
            <Container>
              <Button variant="primary" onClick={onClickAddPlayer}>Add Player</Button>
            </Container>
          </Navbar>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <SearchForm setSearchKey={setSearchKey} />
          </Navbar.Text>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
