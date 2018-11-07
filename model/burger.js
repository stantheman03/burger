var orm  = require('../config/orm.js');

var burgers = {
    all:function(cb){
        orm.all('Burgers',function(res){
            cb(res);
        });
    },

    create:function(cols,vals,cb){
        orm.create('Burgers',cols,vals,function(res){
            cb(res);
        })
    },
    update:function(objColVals,condition,cb){
        orm.update('Burgers'.objColVals,condition,function(res){
            cb(res)
        })
    },
    delete:function(condition,cb){
        orm.clear('Burgers',condition,function(res){
            cb(res);
        })
    }
}

module.exports = burgers;