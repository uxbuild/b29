import React from "react";
import { useNavigate } from "react-router-dom";
// import './css/Nav.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function PlayerListItem({ player }) {
    const navigate = useNavigate();
    function viewDetails(){
        navigate(`/players/${player.id}`);
    }
  return (
    <tr>
      <td className="players-list-table-col-item">{player.id}</td>
      <td className="players-list-table-col-item">{player.name}</td>
      <td className="players-list-table-col-item">{player.breed}</td>
      <td className="players-list-table-col-item"><Button variant="primary" onClick={viewDetails}>View Details</Button></td>
    </tr>
  );
}
