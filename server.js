const express = require("express");
const pokemon = require("./models/pokemon");
const app = express();
const PORT = 3000;

/**
 * @path /
 * @method GET
 * @action default
 * @description welcome users
 */
app.get("/", (req, res) => {
  console.log("And we are Live!");

  res.send("Welcome to the Pokemon App!");
});

/**
 * @path /pokemon
 * @method GET
 * @action index
 * @description returns a list of Pokémon
 */
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

// Live server
app.listen(PORT, (req, res) => {
  console.log(`Server is running on localhost:${PORT}`);
});
