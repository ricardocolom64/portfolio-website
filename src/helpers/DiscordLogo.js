import React from "react";
import DiscordImage from "../assets/icons/Discord-Logo+Wordmark-Color.svg";

function DiscordLogo() {
  return (
    <div>
      <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
        <img
          src={DiscordImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
      </a>
    </div>
  );
}

export default DiscordLogo;
