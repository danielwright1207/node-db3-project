/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const Scheme = require('./scheme-model')

const checkSchemeId = async (req, res, next) => {
  const {scheme_id} = req.params
  try {
    const Id = await Scheme.findById(scheme_id);
    if (!Id) {
      res.status(404)
      .json({ 
        message: `scheme with scheme_id ${scheme_id} not found` });
    } else {
      req.scheme_id = Id;
      next();
    }
  } catch (err) {
    next(err);
  }  // DO YOUR MAGIC
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = async (req, res, next) => {
  try{
  const {scheme_name} = req.body
  if (!scheme_name || scheme_name === "" || typeof scheme_name !== 'string') {
    res.status(400).json({message: "invalid scheme_name"})
} else {
  next()
}
  }catch (err){
    next(err)
  }
}










/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/

const validateStep = async (req, res, next) => {
  try{
  const {instructions, step_number} = req.body
  if (!instructions || instructions === "" ||
  typeof instructions !== 'string' || 
  typeof step_number !== 'number' || step_number < 1) {
    res.status(400).json({message: "invalid step"})
} else {
  next()
}
} catch (err){
  next(err)
}
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
