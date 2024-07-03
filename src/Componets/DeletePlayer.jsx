import React from "react";
import { deletePlayer } from "../API";

const deletePlayer = ({ playerID, onDeletesuccess }) => {
  const handleDeletePlayer = async () => {
    try {
      await deletePlayer(playerID);
      onDeletesuccess();
    } catch (error) {
      console.error("Failed to delete player:", error);
    }
  };
  return <button onClick={handleDeletePlayer}>Delete</button>;
};
export default deletePlayer;
