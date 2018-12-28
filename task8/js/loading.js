
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
        var text='<li class="loading"><p class="background" id="background'+i+'"></p><p class="death" id="death'+i+'"></p><p class="two"></p><p class="loadingThree" id="loadingThree'+i+'"></p><button class="see" id="click'+i+'" onclick="see(id);"></button><button class="die" id="die'+i+'" onclick="judge(id)">生存</button></li>';
        $(".main").append(text);
        var a = document.getElementById('loadingThree'+i+'');
        a.innerHTML =p;
        var b = document.getElementById('click'+i+'');
        b.innerHTML =n; 
        var d=document.getElementById('background'+i+'');
        d.style.backgroundImage="url('../img/2.png')";  
        var e=document.getElementById('death'+i+'');
        e.style.backgroundColor="#ccc";   
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
    $(".death").hide(); 
})	
function see(id){
    var i = id.substr(id.indexOf("k")+1);
    $("#background"+i).toggle(); 
}
var i,n;
function judge(id){
     i = id.substr(id.indexOf("e")+1);
     n =document.getElementById('death'+i+'');
if(n.innerHTML==""){
    die();
}else{
    $.alert({
        title:'上帝提示',
        content:' 玩家已经死亡',
        type:'red',
    })
}
}
function die(){
    var list = document.getElementsByClassName('two');
    var die=document.getElementById('die'+i+'');
    var b = document.getElementById('click'+i+'');
    $.confirm({
        title:'上帝提示',
        content:'请确定玩家是否死亡？',
        type:'red',
        buttons:{
            ok:{
                text:'确定',
                btnClass:'btn-primary',
                action:function(){
                    n.innerHTML =list[i].innerHTML; 
                    $("#death"+i).show(); 	
                    die.style.backgroundColor="#ccc"; 
                    die.innerHTML="死亡";
                    b.style.backgroundColor="#ccc";   		  									
                }
              },
           cancel: {
               text:'取消',
                 action:function(){					 
               }
           }
    }	
})
}
