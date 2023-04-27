import React from "react";

// displays current game word state
export default function Word({ gameWord, guessedLetters }) {
  // destructure string into array
  const gameWordList = [...gameWord] ?? [];
  // array with letter if in guessedLetters else _
  const gameStateList = gameWordList.map((letter) =>
    guessedLetters[letter] ? letter : (letter===" " ? " " : "_")
  );

  return <div className="word">Game word: {gameStateList.join(" ")}</div>;
}
