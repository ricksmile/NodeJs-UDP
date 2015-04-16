var dgram=require('dgram');
var message=new Buffer('您好');
var client=dgram.createSocket('udp4');
client.send(message,0,message.length,5000,'localhost',function(err,bytes) //外網網卡
{
  if (err) {
       console.log('發送數據失敗');
  }
  else console.log('已發送%d 字節數據',bytes);
  
  
});

client.on('message',function(msg,rinfo){
  
  console.log('已接受服務器端發送的數據:%s',msg);
  console.log('服務器地址為%s',rinfo.address);
  console.log('服務器PORT:%s',rinfo.port)
});
    
    
