const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/home_controller');


//Checking if router loaded
console.log("Router loaded");

//to access home controller 
router.get( '/', homecontroller.home);

// for anty further routes, access from here
// router.use('/routerName', require('./routerfile));

// Exporting router to be available for indexe.js app entry point
module.exports = router;