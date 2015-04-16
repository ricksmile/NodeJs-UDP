var dgram=require("dgram");
var server =dgram.createSocket('udp4');
//var address=server.address();
server.on('message',function(msg,rinfo){
    console.log('已接受客戶端發送的數據'+msg);
    console.log('客戶端接受訊息為 %j'+msg);
    var buf= new Buffer('確認訊息:'+msg);
    server.send(buf,0,buf.length,rinfo.port,rinfo.address);
    
    });
    
    
    server.on('listening',function() {
     var address=server.address();
      console.log('服務器開始監聽,地址訊息為 %j',address);        
    });
    
    server.bind(5000,'localhost'); //內網網卡
    
    
