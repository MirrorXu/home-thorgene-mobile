/**
 * Created by MirrorXu on 2017/8/21.
 */

var express = require('express');
var app = express( );
var os = require('os');
var myIp = getIp().toString();
var myPort = 80;
function getIp (){
    var iptable={},
        ifaces=os.networkInterfaces();
    for (var dev in ifaces) {
        ifaces[dev].forEach(function(details,alias){
            if (details.family=='IPv4') {
                iptable[dev+(alias?':'+alias:'')]=details.address;
            }
        });
    }

    if( iptable['WLAN:1'] !=='127.0.0.1'){
        return iptable['WLAN:1']
    }else {
        return '未找到局域网IP地址-请使用本机地址：127.0.0.1'
    }
}

app.use( express.static('./front') );


app.listen(80,function () {
    console.log('node-server服务已经开启:  '+myIp + ":"+ myPort + '/')
});
