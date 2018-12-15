$(document).ready(function(){
    var p;
    $('#button').on('click',function(){
        var number=$("#input").val();
       if(number>=9&&number<=18){
           for(var i=1;i<=number;i++){
               var text='<li class="loading"><a class="loadingThree"></a></li>';
            $(".main").append(text);
           }
       }else{
           $.alert({
               title:'系统提示',
               content:' 请输入9到18之间的数',
               type:'red',
           })
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
    })
    $('#start').on('click',function(){
        window.location.href="god.html";
    })
})