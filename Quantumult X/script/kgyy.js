/******************************

脚本功能：酷狗音乐——解锁VIP
软件版本：12.2.0
更新时间：2024.04.14


*******************************

[rewrite_local]

http:\/\/api\.chuangqi\.store\/ url script-response-body https://raw.githubusercontent.com/xy5120/IOS_Rule/main/Quantumult%20X/script/kgyy.js

                            
[mitm] 

hostname = api.chuangqi.store

*******************************/

body = $response.body.replace(/\"vip_end_time":\w+/g, '\"vip_end_time":4099040228000').replace(/\"is_ad_vip":\d+/g, '\"is_ad_vip":1').replace(/\"isvip":\d+/g, '\"isvip":1')
$done({body});
