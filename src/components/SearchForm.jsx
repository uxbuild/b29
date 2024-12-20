import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/SearchForm.css";
import { useLocation } from "react-router-dom";

export default function SearchForm({ setSearchKey }) {
  const loc = useLocation();
  function search(e) {
    console.log(e.target.value);
    setSearchKey(e.target.value);
  }
  function clearSearch(e) {
    console.log("clear search: ", e.target.value);
    // e.target.value = "";
    // const el = document.getElementById("playerSearchField");
    const el = document.getElementsByClassName("playerSearchField")[0];
    el.value = "";
    setSearchKey("");
    // console.log("loc: ", loc.pathname);
  }

  return (
    // <div className="container search-form-container">
    <div className="">
        <Form>
          <Row>
            <Col xs="auto">
              <FloatingLabel
                controlId="floatingInput"
                label="Find a player.."
                className="mb-2"
              >
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-md-2 playerSearchField"
                  //   id="playerSearchField"
                  onChange={search}
                />
              </FloatingLabel>
            </Col>
            <Col xs="auto">
              <Button variant="dark" size="lg" type="button" onClick={clearSearch}>
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
     
    </div>
  );
}
