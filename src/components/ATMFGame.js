import React from "react";

// Game is retrieved from the embed link at https://supercolom64.itch.io/aliens-took-my-friend

function ATMFGame() {
  return (
    <iframe
      mozallowfullscreen="true"
      frameborder="0"
      src="//v6p9d9t4.ssl.hwcdn.net/html/4996290/ATMF-WebGL/index.html"
      scrolling="no"
      webkitallowfullscreen="true"
      msallowfullscreen="true"
      height="564"
      allowtransparency="true"
      id="game_drop"
      width="984"
      allowfullscreen="true"
    ></iframe>
  );
}

export default ATMFGame;
