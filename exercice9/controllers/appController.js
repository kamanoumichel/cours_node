module.exports.home = (req, res) => {
  res.render('pages/show_route_params', { id_value: req.params.id });
}

module.exports.show_get_params = (req, res)=>{
  let query = req.query ; //récupération des paramètres GET
  res.render('pages/show_get_params',{query})
}

module.exports.formulaire = (req, res)=>{
  res.render('pages/smpl_form')
}
