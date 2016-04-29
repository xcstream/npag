module.exports = function(req,res){
    if (req.url != '/test') return false
    res.writeHead(200, {'Content-type' : 'text/html;charset=utf-8'});

    var q =['a','b','c','d','e',{}].reduceRight((a,b) => {return {[b]:a}})
    console.log(JSON.stringify(q))
    res.write(JSON.stringify(q))
    res.end('');
    return true
}