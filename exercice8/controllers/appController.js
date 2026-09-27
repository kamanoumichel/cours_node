module.exports.home = (req, res) => {
  res.render('pages/show_route_params', { id_value: req.params.id });
}
