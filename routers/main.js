const express=require('express')
const router =express.Router()
//const Post=require('../models/post')



router.get('/',(req,res)=>{ 
    console.log(req.session)
    res.render('site/index') })
router.get('/profile',(req,res)=>{res.render('site/profile') })
router.get('/contact',(req,res)=>{res.render('site/contact') })
router.get('/settings',(req,res)=>{res.render('site/settings') })
router.get('/collection',(req,res)=>{res.render('site/collection',{layout: false}) })







module.exports=router