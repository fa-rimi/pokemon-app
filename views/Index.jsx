const React = require("react");
// const pokemon = require("../models/pokemon");

function Index(props) {
  // dynamic styling
  const textStyle = {
    color: "blue",
    fontFamily: "'Press Start 2P', cursive",
  };

  const { pokemon } = props;
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
      <h1 style={textStyle}>Can you catch them all!</h1>
      <ul>
        {pokemon.map((poke, i) => (
          <li key={i}>
            <h2>{poke.name}</h2>
            <img src={poke.img} alt={poke.name} />
          </li>
        ))}
      </ul>
    </main>
  );
}

/**
 * ! I wrote module.exports = Index(); -> this gave me an error:
 * !! TypeError: Cannot destructure property 'pokemon' of 'props' as it is undefined
 *
 * * Once I removed the parenthesis, my pokemon finally displayed :)
 * */
module.exports = Index;
