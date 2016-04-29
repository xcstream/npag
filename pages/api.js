/**
 * Created by baixing on 16/4/28.
 */
var URL = require('url')
var querystring = require('querystring')
module.exports = api

function api(req,res){
    if (req.url!= '/api') return false;
    res.writeHead(200, {'Content-type' : 'text/html'});
    req.setEncoding('utf-8');
    var postData = ""

    req.addListener("data", function (postDataChunk) {
        postData += postDataChunk;
    });

    req.addListener("end", function () {
        if (postData == ""){
            res.write('no post data');
            res.end();
        }else {
            var po = postData.split(':');
            var action = po[0];
            if(action == 'sum'){
                var data = po[1];
                var arr = data.split(',');
                var r = arr.reduce((a,b)=>{return parseInt(a,10)+parseInt(b,10)});
                res.write(''+r);
            }
            res.end();
        }
    });
    return true
}
