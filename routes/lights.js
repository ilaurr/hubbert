var express = require('express');
var router = express.Router();
var axios = require ('axios');
var url = require ('./http');

/* GET users listing. */
router.get('/on/:light', async function(req, res) {
  try{
      let response = await axios.put(url+'/lights/'+req.params.light+'/state', {on:true});
      console.log(response.data);
      if (response.data[0].error)
        res.status (200).send ({status: 'err2'});
      else
        res.status (200).send ({status: 'ok'});
    }
  catch (err){
    res.status(200).send ({status: 'err1'});
  }
});

router.get('/off/:light', async function(req, res) {
  try{
      console.log(req.params.light)
      let response = await axios.put(url+'/lights/'+req.params.light+'/state', {on:false});
      console.log(response.data);
      if (response.data[0].error)
        res.status (200).send ({status: 'err2'});
      else
        res.status (200).send ({status: 'ok'});
    }
  catch (err){
    res.status(200).send ({status: 'err1'});
  }
});

router.get('/sat/:light/:sat', async function(req, res) {
  try{
      console.log(req.params.sat);
      console.log(req.params.light);
      let response = await axios.put(url+'/lights/'+req.params.light+'/state', {sat:parseInt(req.params.sat)});
      console.log(response.data);
      if (response.data[0].error)
        res.status (200).send ({status: 'err2'});
      else
        res.status (200).send ({status: 'ok'});
    }
  catch (err){
    console.log(err);
    res.status(200).send ({status: 'err1'});
  }
});

router.get('/bri/:light/:bri', async function(req, res) {
  try{
      console.log(req.params.bri);
      console.log(req.params.light);
      let response = await axios.put(url+'/lights/'+req.params.light+'/state', {bri:parseInt(req.params.bri)});
      console.log(response.data);
      if (response.data[0].error)
        res.status (200).send ({status: 'err2'});
      else
        res.status (200).send ({status: 'ok'});
    }
  catch (err){
    console.log(err);
    res.status(200).send ({status: 'err1'});
  }
});

router.get('/hue/:light/:hue', async function(req, res) {
  try{
      console.log(req.params.hue);
      console.log(req.params.light);
      let response = await axios.put(url+'/lights/'+req.params.light+'/state', {hue:parseInt(req.params.hue)});
      console.log(response.data);
      if (response.data[0].error)
        res.status (200).send ({status: 'err2'});
      else
        res.status (200).send ({status: 'ok'});
    }
  catch (err){
    console.log(err);
    res.status(200).send ({status: 'err1'});
  }
});
  
router.get('/ct/:light/:ct', async function(req, res) {
  try{
      console.log(req.params.ct);
      console.log(req.params.light);
      let response = await axios.put(url+'/lights/'+req.params.light+'/state', {ct:parseInt(req.params.ct)});
      console.log(response.data);
      if (response.data[0].error)
        res.status (200).send ({status: 'err2'});
      else
        res.status (200).send ({status: 'ok'});
    }
  catch (err){
    console.log(err);
    res.status(200).send ({status: 'err1'});
  }
});

router.get ('/state/:light', async function (req, res){
  try{
    let response = await axios.get(url+'/lights/'+req.params.light);
    console.log(response.data);
    if (response.data[0] && response.data[0].error)    
      res.status (200).send ({status: 'err2'});
    else
      res.status (200).send ({status: 'ok'});
  }
  catch (err){
    console.log(err);
    res.status(200).send ({status: 'err1'});
}
});

router.get ('/test/:light', async function (req, res){
  try{
    let response = await axios.get(url+'/lights/'+req.params.light);
    console.log(response.data);
    if (response.data[0] && response.data[0].error)    
      res.status (200).send ({status: 'err2'});
    else
      res.status (200).send ({status: 'ok'});
  }
  catch (err){
    console.log(err);
    res.status(200).send ({status: 'err1'});
}
});

module.exports = router;
