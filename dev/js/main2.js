//// This is the second  JS file /////

var Obj = (function(obj){

    obj.run = function(){
        console.log(obj.hello() + ' ' +  obj.world());
    }    

    return obj;

})(Obj || {})
