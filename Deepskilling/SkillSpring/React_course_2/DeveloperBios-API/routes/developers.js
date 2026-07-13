var express = require('express');
var router = express.Router();
const Developer = require('../models/developer');
const devs = require('../developers.json');

/* GET /Developers. */
router.get('/all',  async (req, res, next) => {
  res.send(devs);
});

/* Add a new developer */
router.post('/add', async (req, res, next) => {
  let newDev = new Developer(
    devs.length + 1, 
    req.body.firstName, 
    req.body.lastName, 
    req.body.favoriteLanguage,
    req.body.yearStarted
  );
  devs.push(newDev);
  res.status(201).send(newDev);
});

/* GET one by id */
router.get('/find/:id',  async (req, res, next) => {
 let developer = devs.find(dev => dev.id == req.params.id);
  res.send(developer);
});

/* Update a developer */
router.put('/update', async (req, res, next) => {

  let index = devs.findIndex(dev => dev.id == req.body.id);
  if(index == -1){
    res.status(400).send("Bad Request");
    return;
  }
  else{
    let updatedDev = new Developer(
      req.body.id, 
      req.body.firstName, 
      req.body.lastName, 
      req.body.favoriteLanguage,
      req.body.yearStarted
    );
    devs.splice(index, 1, updatedDev);
    res.send(updatedDev);
  }
});

/*delete a developer by id */
router.delete('/delete/:id', async (req, res, next) => {
  let index = devs.findIndex(dev => dev.id == req.params.id);
  if(index == -1){
    res.status(400).send("Bad Request");
    return;
  }else{
    devs.splice(index, 1);
    res.status(200).send({ message:`Developer with id ${req.params.id} deleted` });
  }

});

module.exports = router;