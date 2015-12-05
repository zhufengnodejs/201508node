#说明一下cookie的哪些参数，分别有什么作用？
 *  path     	   控制访问哪些路径可以发送cookie.
 *  domain   	   指定cookie会发送到哪个域名下面
 *  expires  	   指定cookie过期时间
 *  max-age 	   指定cookie的失效时间，如果没有指定失效时间，那么cookie不会写入硬盘，只持续到会话结束(浏览器关闭)
 *  httpOnly	  不能在js里操作cookie