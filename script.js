var name; 

var goal;

var time;

$(".submit").click(function(){
    name = $(".yourName").val();
    goal = $(".yourGoal").val();
    time = parseInt($(".timeTaken").val());
    var calc = time + 2019;
    console.log(name, goal, time);
    $(".container").hide();    
    $(".results").show();
    $(".results").append(" Hello, " + name + " i can tell you are very passionate about becoming a " + goal + " and based on how long you personally think this will take which is " + time + " year, i can tell you that by you will become a professional at it in " + calc + " for sure! ");
});

