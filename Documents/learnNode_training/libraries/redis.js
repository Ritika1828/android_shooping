const redis = require('redis');
const client = redis.createClient();

client.connect().then(()=>console.log('Redis connected')).catch((error)=> console.log({message:'Redis connected Failed'}));

module.exports=client;
