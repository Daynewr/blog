//// This is the third JS file /////

var Obj = (function(obj){

    obj.hello = function(){
        return 'hello';
    }

    obj.world = function(){
        return 'world';
    }

    return obj;

})(Obj || {})

