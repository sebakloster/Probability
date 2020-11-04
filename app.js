let names = [
  "seba",
  "alan",
  "batu",
  "alejo",
  "chapu",
  "edu",
  "fede",
  "guido",
  "juan",
  "juanma",
  "lauti",
  "renzo",
  "santi",
  "tomi",
  "topo",
  "planta",
  "jm",
  "pirra",
  "guifra",
  "tomex",
  "helmet",
  "fedesnake",
  "cangre",
  "salga",
  "rompamos",
  "agusdra"
];

const getStatement = () => {
  return document.getElementById("userInput").value;
};
const incluyeNombre = (statement) => {
  return names.some((v) => statement.toLowerCase().includes(v));
};

const nameWeight = (statement) => {
  if (incluyeNombre(statement)) {
    return 1;
  } else {
    return 0.3;
  }
};

const lenghtWeight = (statement) => {
  let nWords = statement.split(" ").length;
  switch (true) {
    case nWords <= 2:
      return 0.9;
      break;
    case nWords == 3:
      return 0.8;
      break;
    case nWords == 4:
      return 0.55;
      break;
    case nWords == 5:
      return 0.4;
      break;
    case nWords > 6:
      return 0.00175;
      break;
    default:
      return 0;
  }
};
const randomProbability = () => {
  return Math.random() * 0.2;
};
const Probability = () => {
  let statement = getStatement();
  console.log(lenghtWeight(statement));
  let probability =
    (0.2 + randomProbability()) * lenghtWeight(statement) +
    (0.4 + randomProbability()) * nameWeight(statement);
  document.getElementById("probability").innerHTML =
    String((probability * 100).toFixed(3)) + "%";
};
