import React from "react";
import { triggerOutbound } from "../services/api";

const TriggerButton = () => {
  const handleClick = async () => {
    const res = await triggerOutbound({
      requestId: "12345",
      type: "ON_DEMAND"
    });
    console.log(res);
    alert("Triggered!");
  };

  return <button onClick={handleClick}>Trigger Process</button>;
};

export default TriggerButton;