import React from "react";
import DiscordImage from "../assets/icons/Discord-Logo+Wordmark-Color.svg";

function DiscordLogo() {
  return (
    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
      <div style={{ whiteSpace: "pre-line" }}>
        <img
          src={DiscordImage}
          alt=""
          style={{
            height: "64px",
          }}
        />
        {"\n"}Discord
      </div>
    </a>
  );
}

export default DiscordLogo;
