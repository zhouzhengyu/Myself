$(document).ready(function(){
    var list = document.getElementsByClassName('two');
    var a=['预言家','女巫','猎人','狼人','平民','狼人','平民','狼人','平民'];
    var b = [];
    start();
        function start(){
            shuffle(a);
            for (var i = 0; i < list.length; i++) {
                list[i].innerHTML =b[i];
            }
        }
        function shuffle(a) {
            while (a.length > 0) {
                var index = parseInt(Math.random() * (a.length - 1));
                b.push(a[index]);
                a.splice(index, 1);
            }
            return b;
        }
    $(".one1").click(function(){
        $(".center1").toggle(); 
        });
    $(".one2").click(function(){
        $(".center2").toggle(); 
    });
    $(".one3").click(function(){
        $(".center3").toggle(); 
        });
    $(".one4").click(function(){
            $(".center4").toggle(); 
        });
    $(".one5").click(function(){
        $(".center5").toggle(); 
        });
    $(".one6").click(function(){
        $(".center6").toggle(); 
        });
    $(".one7").click(function(){
        $(".center7").toggle(); 
        });
    $(".one8").click(function(){
        $(".center8").toggle(); 
        });
    $(".one9").click(function(){
        $(".center9").toggle(); 
        });
})