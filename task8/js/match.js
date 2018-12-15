$(document).ready(function(){
var p,p1;
var number;
$('#button').on('click',function(){
    number=$("#input").val();
    if(number>=9&&number<=12){
        if(number==9){
            p1='预言家：1名 女巫：1名 猎人：1名 狼人：3名 平民：3名';
            $(".describe").append(p1);
        }else if(number==10){
            p1='预言家：1名 女巫：1名 猎人：1名 狼人：3名 平民：4名';
            $(".describe").append(p1);
        }else if(number==11){
            p1='预言家：1名 女巫：1名 猎人：1名 狼人：4名 平民：3名 守卫：1名';
            $(".describe").append(p1);
        }else if(number==12){
            p1='预言家：1名 女巫：1名 猎人：1名 狼人：4名 平民：3名 守卫：1名 白痴：1名';
            $(".describe").append(p1);
        }
    }else{
    $.alert({
        title:'系统提示',
        content:' 请输入9到18之间的数',
        type:'red',
    })
}
})
$('#start').on('click',function(){
        for(var i=1;i<=number;i++){
            var text='<li class="loading"><a class="loadingThree"></a></li>';
        $(".main").append(text);
        }
    var a = document.getElementsByClassName('loadingThree');
    for (var i = 0; i <a.length; i++) {
        p=[i+1]+'号';
        if(a[i].innerHTML.length==0){
        a[i].text =p;
        }else{
            continue;
        } 
    }         
    window.location.href="god.html";
})
})