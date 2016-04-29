var storage = require('../modules/storage')
module.exports = function(req,res){
    if (req.url != '/about') return false
    res.writeHead(200, {'Content-type' : 'text/html;charset=utf-8'});


    var s = new storage()
    s.set('aa','df',()=>{
        s.get('aa',(val)=>{
            res.write(val)
        })
    })

    s.incr('ab',(val)=>{
        res.write(''+val)
    })



    res.write(`
        <p>xcstream的个人主页.
        <p>嘿嘿嘿,nodejs写的,暂时还没引入第三方库.
        <p><a href="/">返回</a>
    `);
    res.end('');
    return true
}
