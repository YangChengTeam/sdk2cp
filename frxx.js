const co = require('co');
const rp = require('request-promise');
const lz = require('lz-string');
const md5 = require('md5');
const sleep = require('sleep');


function ropenid() {
    var r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let s = ""
    for (var i=0; i < 28; i++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
    return s;
}

function rname() {
    var r = 'abcdefghijklmnopqrstuvwxyz';
    let s = ""
    for (var i=0; i < 6; i++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
    return s;
}


function post(data){
    let zdata = lz.compressToBase64(JSON.stringify(data));
    let timestamp = new Date().getTime();
    var sign = md5(zdata +'@'+ timestamp);
    let options = {
        url : "https://x.198174.com/xiuzhen",
        method: "POST",
        form: {
            zdata: zdata
        },
        headers: {
            timestamp: timestamp,
            sign: sign    
        }
    }
    rp(options).then(data=>{
         console.log(lz.decompressFromBase64(data))
    });
    console.log(timestamp)
}

//{"action":"init","data":{"openid":"oVplN5ZwuYoRscHXhj4FYceZRwh4","name":"🗿小仁","province":"湖北","city":"武汉","age":0,"gendar":1,"timestamp":1537498214562,"faceUrl":"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqbfcFTFtXUTQhRTHdhHY376JJiaFuZ9cpkHMYgYhzBLLLW8PO7Ywk5C4gniaamPaic8rNRkbicnoLD8g/132","from":"oVplN5ZPEKElIcxpiHrDNol8Yw2A","type":4}}
//{"action":"hz_l","data":{"uid":881,"jingjie":1}}
//{"action":"jh_l","data":{"uid":881}}

//post({"action":"ys_a","data":{"uid":30,"jingjie":1,"id":6}});
//{"action":"dh_a","data":{"uid":30,"jingjie":1,"id":2}};
//{"action":"ys_a","data":{"uid":30,"jingjie":1,"id":4}}
// console.log(lz.decompressFromBase64("N4IghgxgLglg9gOxALhDBMogDQgCZhRgqhwAOAphniiHAGpkA2AcgKwBaA7gK4CacAEoBnCAAkAGgAsAVgBYAYnwgUOgrlLk4QCMAFsKtQLwbgf93A8DqBBuW1kATnABu6FbUBqdoHRlbREwBPWoDNrQEkbbTAAc0NkAAZcMIQCGxQARlxYA2EiPTJEtgBmAHY5AE4ADgAmBLk2ADYS3AAzSAoAVRsmWikoKDJhZAB6Hq4ADwA6AEcmOBC4IYgEHr09cioexwB9bJKegBE+AEEASQB5EJGi7IoRgCNaiAUAFQUoCUbbgEUpQVuxPCkxPjzKgBSAJgYAUPA4BQgZAA1mIALJ8EJ8KQALwAQgAZLEAdSKAAUDrk+FxoWwAMJyEIYMD6PFgGAQIo2FiCaEXBkIOAYzZFEI9BLrbS1Ox6WgMZjsDh4gCiAGlpUw9hABmQYGIbJsWHAmEViSUdtooN5KCg5ABfM1AA==="))

// console.log(lz.decompressFromBase64("N4IghgxgLglg9gOxALhACwF4H0A2IA0IAJmFGCqAK4xEoAcdAjIQFYwIDmbApiowL78gA==="))
//console.log(lz.decompressFromBase64("N4IghgxgLglg9gOxALhACwF4H0A2IA0IAJmFGCqAK4xEoDMADIQFYwIDmrApigIwC+/IA==="))

//console.log(lz.decompressFromBase64("N4IghgxgLglg9gOxALhDBMogDQgCZhRgqhwAOAphniiHAGpkA2AcgKwBaA7gK4CacAEoBnCAAkAGgAsAVgBYAYnwgUOgrlLk4QCMAFsKtQLwbgf93A8DqBBuW1kATnABu6FbUBqdoHRlbREwBPWoDNrQEkbbTAAc0NkAAZcMIQCGxQARlxYA2EiPTJEtgBmAHY2BLkATgAOBIAmbOzcADNICgBVGyZaKSgoMmFkAHpurgAPADoARyY4ELhBiARuvT1yKm7HAH1s8u6AET4AQQBJAHkQ4ZLsimGAIxqIBQAVBSgJBpuARSlBG7E8KTE+PIA2ABSAJgYAUPA4RQgZAA1mIALJ8EJ8KQALwAQgAZLEAdRKAAV9rk+FxoWwAMJyEIYMD6PFgGAQEo2FiCaHnBkIOAYjYlELdBJrbQ1Ox6WgMZjsDh4gCiAGlpUxdhB+mQYGIbBsWHAmCVieVttooN5KChygBfM1AA==="))

console.log(lz.decompressFromBase64("N4IghgxgLglg9gOxALhDBMogDQgCZhRgqhwAOAphniiHAGpkA2AcgKwBaACgKIDSPJgEkIADzIwAEgCcAIizhMAHAE0A7gCYAgjhAIwAWwq1ARukndZaXABu6CMdS6ImAJ61dYAOYOADLm8IBNIoAIy4sEYAzkQGZKFsAMwA7GwhAJxJSRo+ibgAZpAUAKrSTLQAFlBQZJHIAPR1aqIAdACOTHCecM0QCHUGBuRUdbYA+gkadQCKPgBWACwAKmoA4ot5iwBSAMKyajAARgDyIVD0FHhqsgDqMGBCAF4JeGxcK0kAQmQASgCueQgOCwANYfVouPgAZRW2z4ADY0uUENs8FBRD4oEJfmlUtZZj5RHlITBnBAQqIElMirI7pFyg9JAlPHUQhNdHkrAZaAxmOxuPxBCJxFI5AplOptLooC5KCgkgBfeVAA=="))
function r(){
    rp("http://p243fifsu.bkt.clouddn.com/data.json").then(data=>{
            data = JSON.parse(data);
            post({"action":"init","data":{from:'oVplN5ZPEKElIcxpiHrDNol8Yw2A', "openid":ropenid(),"name":rname(),"province":"湖北","city":"武汉","age":0,"gendar":0,"timestamp":new Date().getTime(),"faceUrl":data[parseInt(Math.random()*data.length)].avatar,"type":7}})
     });
  
}

r()

// post({"action":"jh_u","data":{"uid":761,"from":"oVplN5ZPEKElIcxpiHrDNol8Yw2A","type":9}})
// r()
// for(let i= 0; i< 5; i++){
//     post({"action":"jh_u","data":{"uid":700-i,"from":"oVplN5ZwuYoRscHXhj4FYceZRwh4","type":8}})
//         sleep.sleep(5)
// }
// r()

// post({"action":"jh_u","data":{"uid":759,"from":"oVplN5ZPEKElIcxpiHrDNol8Yw2A","type":4}})

//post({"action":"jh_u","data":{"uid":759,"from":"oVplN5ZPEKElIcxpiHrDNol8Yw2A","type":4}})

//post({"action":"init","data":{"openid":"oVplN5ZwuYoRscHXhj4FYceZRwh2","name":"🗿小仁","province":"湖北","city":"武汉","age":0,"gendar":1,"timestamp":1537514981233,"faceUrl":"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqbfcFTFtXUTQhRTHdhHY376JJiaFuZ9cpkHMYgYhzBLLLW8PO7Ywk5C4gniaamPaic8rNRkbicnoLD8g/132","from":"oVplN5ZPEKElIcxpiHrDNol8Yw2A","type":2}})