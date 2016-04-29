/**
 * Created by baixing on 16/4/28.
 */
module.exports = homepage
function homepage(req,res){
    if (req.url != '/') return false
    res.writeHead(200, {'Content-type' : 'text/html;charset=utf-8'});
    res.write('<h1>dafdsafsadfdsaf</h1>');
    var a = 2332
    var b = 2323
    var c = {a:a,b:b}
    res.write(`<h1>
    <br> ${a}
    <br> ${a+b}
    <br> ${JSON.stringify(c)}
    </h1>`);
    oo = [23,32,23,12,23,23,11,123,23,23,121212]
    var d = oo.map((x) => x+1)
    res.write(d.join(','))
    res.write(`<div><a href="/api">api</a></div>`);
    res.write(`<div><a href="/about">关于</a></div>`);

    res.end('<p>adsfdsafasdf</p>');
    return true
}
