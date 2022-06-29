import React from "react";
import battery from "../Assert/images/battery.png";

export default function Home() {
  return (
    <div className="home">
      <h2>Murugan Battery Sales & Service </h2>
      <p className="homeP">"Providing Longlasting services for better use " </p>

      <div>
        <img src={battery} height={300} width="600" alt="battery" />
      </div>
    </div>
  );
}
