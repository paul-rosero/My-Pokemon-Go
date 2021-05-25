const router = require('express').Router();
const users = require('./users');
// const pokemons = require('./pokemons');

router.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Welcome',
    version: '1.0.0',
  });
});

router.use(users);
// router.use('/pokemons', pokemons);

module.exports = router;