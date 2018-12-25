
$(document).ready(function(){
    var number,arr;
    var url=window.location.search;
    if(url.indexOf("?")!=-1){
        number = url.substr(url.indexOf("=")+1);
    }else{
        return number;
    }

   
    for(var i=1;i<=number;i++){
        var p=[i]+'号';
        var n='请查看'+[i]+'号身份';
        var text='<li class="loading"><p class="background" id="background'+i+'"></p><p class="two"></p><p class="loadingThree" id="loadingThree'+i+'"></p><button class="see" id="click'+i+'"></button></li>';
        $(".main").append(text);
        var a = document.getElementById('loadingThree'+i+'');
        a.innerHTML =p;
        var b = document.getElementById('click'+i+'');
        b.innerHTML =n; 
        var d=document.getElementById('background'+i+'');
        d.style.backgroundImage="url('../img/2.png')";
          
           
    } 
    
    var list = document.getElementsByClassName('two');
    if(number==9){
        arr=['预言家','女巫','猎人','狼人','平民','狼人','平民','狼人','平民'];
        start();
    }else if(number==10){
        arr=['预言家','女巫','猎人','狼人','平民','狼人','平民','狼人','平民','平民'];
        start();
    }else if(number==11){
        arr=['预言家','女巫','猎人','狼人','平民','狼人','平民','狼人','平民','守卫','平民'];
        start();
    }else if(number==12){
        arr=['预言家','女巫','猎人','狼人','平民','狼人','平民','狼人','平民','守卫','平民','白痴'];
        start();
    }
   
    function start(){
        shuffle(arr);
        for (var i = 0; i < list.length; i++) {
            list[i].innerHTML =arr[i];
        }
    }
    function shuffle(arr) {
        var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i));
        var temp = arr[index];
        arr[index] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    }
    return arr;
    }
})
   