window.onload = function(){
    document.getElementById('btn').addEventListener('click',function(){
        alert('你为会啥点我');
    })

    setInterval(function(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','/clock',true);
        xhr.onload = function(){
            if(this.status ==200){
                document.querySelector("#clock").innerHTML = this.responseText;
            }
        }
        xhr.send();
    },1000)
}