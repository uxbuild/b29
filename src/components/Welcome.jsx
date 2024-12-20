import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate('/other-page');
    console.log("Continue clicked..");
    navigate("/players");
  };

  return (
    <div className="container">
      <h2>Welcome to Puppy Bowl</h2>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        View players
      </button>
    </div>
  );
}
