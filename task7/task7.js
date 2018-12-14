$(document).ready(function(){
    var list = document.getElementsByClassName('one');
    var time;
    var rgb;
    var a=0;
$('#start').on('click',function(){
    clearInterval(time);
    time = setInterval(function () {
        for (var i = 0; i < list.length; i++) {
            list[i].style.backgroundColor ='';
        }
        start();
    }, 1000);
})
$('#end').on('click',function(){
    clearInterval(time);
        for (var i = 0; i < list.length; i++) {
            list[i].style.backgroundColor ='';
        }
})
    function start(){
        var one = Math.floor(Math.random()*list.length);
        var two = Math.floor(Math.random()*list.length);
        var three = Math.floor(Math.random()*list.length);
        if(one == two){
            one = Math.floor(Math.random()*list.length);
        }else if(two == three){
            two = Math.floor(Math.random()*list.length);
        }else if(one == three){
            three = Math.floor(Math.random()*list.length);
        }
        list[one].style.backgroundColor = 'rgb'+ color();
        list[two].style.backgroundColor = 'rgb'+ color();
        list[three].style.backgroundColor = 'rgb'+ color();
    }
    
     function color(){
        var rgba='(255, 166, 0)';
        colors();
        if(rgb==rgba){
         colors();
        }else{
            if(rgb==a){
                colors();
            }else{
                a=rgb;
                return rgb;

            }
        }
     }  
     function colors(){
         var r=Math.floor(Math.random()*255);
         var g=Math.floor(Math.random()*255);
         var b=Math.floor(Math.random()*255);
         rgb='('+r+','+g+','+b+')';
}
})