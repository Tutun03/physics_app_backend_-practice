const express = require('express');
const router=express.Router();
// const upload=require('../middlewares/upload');
const {functionone}=require('../controller/functionone1')
// router.route('/').post(upload.single('file'), functionone);
router.route('/').post(functionone)

module.exports=router;