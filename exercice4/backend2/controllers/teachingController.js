module.exports.home = (req, res) => {
  res.send('<h1>Enseignements</h1>');
}

module.exports.javascript = (req, res) => {
  res.send('<h1>Cours de JavaScript</h1>');
}

module.exports.php = (req, res) => {
  res.send('<h1>Cours de PHP 1</h1>');
}

module.exports.node = (req, res) => {
  res.send('<h1>Introduction à Node.js</h1>');
}

module.exports.express = (req, res) => {
  res.send('<h1>Cours sur le framework Express</h1>');
}