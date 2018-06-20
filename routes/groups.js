var express = require('express');
var router = express.Router();
var axios = require ('axios');
var url = require ('./http');

/* GET users listing. */
router.get('/on/:group', async function(req, res) {
  try{
      let response = await axios.put(url+'/groups/'+req.params.group+'/action', {on:true});
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

router.get('/off/:group', async function(req, res) {
  try{
      console.log(req.params.group)
      let response = await axios.put(url+'/groups/'+req.params.group+'/action', {on:false});
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

router.get('/sat/:group/:sat', async function(req, res) {
  try{
      console.log(req.params.sat);
      console.log(req.params.group);
      let response = await axios.put(url+'/groups/'+req.params.group+'/action', {sat:parseInt(req.params.sat)});
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

router.get('/bri/:group/:bri', async function(req, res) {
  try{
      console.log(req.params.bri);
      console.log(req.params.group);
      let response = await axios.put(url+'/groups/'+req.params.group+'/action', {bri:parseInt(req.params.bri)});
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

router.get('/ct/:group/:ct', async function(req, res) {
    try{
        console.log(req.params.ct);
        console.log(req.params.group);
        let response = await axios.put(url+'/groups/'+req.params.group+'/action', {ct:parseInt(req.params.ct)});
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

router.get('/hue/:group/:hue', async function(req, res) {
  try{
      console.log(req.params.sat);
      console.log(req.params.group);
      let response = await axios.put(url+'/groups/'+req.params.group+'/action', {hue:parseInt(req.params.hue)});
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
  
router.get ('/state/:group', async function (req, res){
  try{
    let response = await axios.get(url+'/groups/'+req.params.group);
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
