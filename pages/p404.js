/**
 * Created by baixing on 16/4/28.
 */
module.exports = homepage
function homepage(req,res){
    console.log(req.url)
    res.writeHead(404, {'Content-type' : 'text/html'});
    res.end('<h1>empty</h1>');
    return true
}
