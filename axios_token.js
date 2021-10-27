import axios from "axios";
import crypto from 'crypto';
// import ua from 'default-user-agent';
import querystring from 'querystring';
import random from 'random-number'


function buildChecksum(params, secret, t, r, postData) {
    const p = params || [];
    p.push(`t=${t}`, `r=${r}`);
    if (!!postData) {
          if (typeof postData === 'string') {
                p.push(postData);
          } else {
                p.push(JSON.stringify(postData));
          }
    }
    p.sort();
    p.push(`secret=${secret}`);
    return crypto.createHash('sha256').update(p.join('&')).digest('hex');
}


let rand = random(option_rand);
    var option_rand = {
            min: 48886
            , max: 67889
            , integer: true
        }

var secret="3A84eebqYqeU3HaaXMcEAip8zBRS";
var time = Math.floor(new Date().getTime() / 1000)
// var postData = {"count":2};

const postData = ""
const params="";
var build = buildChecksum(params,secret,time,rand,postData);
    const parameters = {
        t:time,
        r:rand,
    }
    const get_request_args = querystring.stringify(parameters);
    const url = 'https://demo.thresh0ld.com/v1/sofa/wallets/194071/apisecret/activate?'+get_request_args

    
axios.post(url,params,{ 
    headers: {
        'Content-Type': 'application/json',
        'X-API-CODE':'4PiVpdbyLJZatLBwR',
        'X-CHECKSUM':build,
        'User-Agent': 'Node.js/16.7.0 (Windows 10; x64)'
    }
})
.then(res=>console.log(res.data))
.catch((error)=>{
    console.log('Error',error.response)
})




