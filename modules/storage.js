var a = {}
module.exports = function(){
    this.set = function(k,v,cb){
        console.log('set',k,v)
        a[k] = v
        cb()
    }
    this.get = function(k,cb){
        v = a[k]
        cb(v)
    }
    this.incr = function(k,cb){
        a[k] = parseInt(a[k],10) + 1
        v = a[k]
        cb(v)
    }
}
