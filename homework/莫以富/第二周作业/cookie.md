##说明一下cookie的哪些参数，分别有什么作用？

>一条cookie构成：key=value; expires=utc时间; domain=baidu.com; path=/ab/cd; httpOnly

+ key=value 
+ expires/max-age


    表示cookie的有效期，cookie会在过了这个时间后会失效，
    默认不设置 expires/max-age cookie仅是session级别，不会存储到硬盘上，只保存在内存中，浏览器关闭后，就消失了
    expires 的值是一个固定的时间点，max-age是一个时间段，
    expires 表示浏览器端一旦过了这个时间，这个cookie就会失效了
    max-age 表示cookie 在浏览器端生成后的max-age 时间内有效，单位是秒
 
+ domain=baidu.com; 


    表示在哪些域名下cookie有效，
    访问baidu.com这个域名的时候产生的cookie 能在news.baidu.com 下使用，反过来不行；
    另外还涉及到跨越的时候A：a.test.com 域中的cookie 要是能在 B域 b.test.com 中能使用也能在A域中能使用的话，
    得把domain设置成 .test.com； 如果要让A域中产生一个B域能访问的cookie，A域中不能访问的话，得把domain设置成b.test.com
+ path=/ab/cd; 


    表示在域下的某个路径下的时候能发送cookie给服务端，否则其他路径下不会发送cookie给服务端
+ httpOnly 


     表示浏览器端无法通过js来改变cookie的值(默认可以通过document.cookie 属性来获取并重新赋值)
