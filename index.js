//$("h1").css("color","red");
//$("button").click(function(){
//    $("h1").css("color","purple");
//    setTimeout( function(){$("h1").css("color","red")},1000);
//});

 $(document).keydown(function(event){
 
    $("h1").text(event.key);
 })