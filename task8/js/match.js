$(document).ready(function(){
var p1;
var number;
$('#button').on('click',function(){
    $(".describe").empty();
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
        content:' 请输入9到12之间的数',
        type:'red',
    })
}
})
$('#start').on('click',function(){
    if(number==null){
        $.alert({
            title:'系统提示',
            content:' 请先输入正确的人数并确定',
            type:'red',
        })
    }else{
        var getval =number;
        window.location.href="loading.html?valus="+getval;  
    }
})
})