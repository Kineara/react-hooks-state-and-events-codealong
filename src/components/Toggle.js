import React, { useState } from "react";

function Toggle() {
  function handleClick() {
    setIsOn(!isOn);
  }

  const [isOn, setIsOn] = useState(false);

  const color = isOn ? "red" : "white";

  

  return <button style={{ background: color }} onClick = {handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
