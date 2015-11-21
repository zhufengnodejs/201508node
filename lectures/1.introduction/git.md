1.注册自己的账号
2. fork老师的的项目
3. 克隆自己的项目
4. 进入项目文件夹
5.在homework 下建立自己名字的文件夹，并添加readme.md文件。
6.git add -A 
7.git commit -m"提交到历史区"
8.git push origin master 提交到 github上
9.发起一个pull request
10.老师合并代码

 git remote add teacher https://github.com/zhufengnodejs/201508node.git
git pull teacher master
git push origin master


 1)如果是一个空的文件夹或者是一个空的文件是上传不上去的
  2)如果出现这两个信息说明，当前本地的git还没有注册
    git config --global user.email "...."
    git config --global user.name "...."
    解决办法:
    $ git config --global user.email "你的邮箱(建议和你们的github注册邮箱保持一致)"
    $ git config --global user.name "你的名字(建议和github用户名保持一致)"
