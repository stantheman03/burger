var express = require('express');
var router = express.Router();

var burgers = require('../model/burger.js');

// display all data
router.get('/',function(req,res){
    burgers.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render('index',hbsObject)
    });
});

// adding data
router.post('/api/burgers',function(req,res){
    burgers.create(['name', 'devoured'],[req.body.name,req.body.devoured],function(data){
       res.render({id: data.insertedId})
    });
});

// updating data


router.put('/api/burgers/:id',function(req,res){
    var condition = 'id= ' + req.params.id;
    console.log('condition ', condition);
    burgers.update(
        {
            devoured: req.body.devoured
        },condition,function(data){
            if(data.changedRows == 0){
                return res.status(404).end();
            }else{
                res.status(200).end()
            }
        });

    });

    // delete data


    router.delete('/api/burgers/:id',function(req,res){
        var condition = 'id=' + req.params.id;
        console.log('burgers', condition);
        burgers.delete(condition,function(data){
           if(data.affectedRows == 0){
               return res.status(404).end();
           }else{
               res.status(200).end()
           }
        })
    })

    module.exports = router;

   