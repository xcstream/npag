var pagefiles = ['homepage','api','test','about','favorite.ico','p404'];
require('http').createServer((req,res)=>{pagefiles.map((m)=>require('./pages/'+m)).some((p)=>p(req,res))}).listen(3000);

