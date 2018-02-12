$("#endGameB").css("display", "none");

var x = 0;
var i = 0;
var conversation = false;

var arthurArray = ["I am King Aurthur. I want you to join me", "I have no quarrel with you good sir knight",
"Now stand aside worthy adversary", "Your arm's off", "Look you stupid bastard you have no arms left", 
"okay, we'll call it a draw"];
var bKnightArray = ["-growls under his breath-", "I have quarrel with anyone looking to cross my tiny bridge",
"what?", "No it isn't", "Yes I have", "Come back here you yellow bastard and see what's coming to ya. I'll bite your legs off"]

$('#kingArthurButton').click(function () {
   if (conversation === false) {
       $('#arthurP').append((arthurArray[i])+"<br>");
    i++;         
   } else {
       alert("the black knights turn")
   }
   conversation = true;

  
    
});

$('#BknightButton').click(function () {
    if (conversation === true) {
    $('#bKnightP').append((bKnightArray[x])+"<br>");
    x++;
    } else {
        alert("King Arthur's Turn")
    }
    conversation = false;
    if (x===6) {
        $("#endGameB").fadeIn(500).css("display", "block");
    } 
    if (x===6) {
        $("#arthurImg").fadeOut(500).hide("#textArthur");
        $("#bKnightImg").fadeOut(500);
        
    }
    $("#reset").click(function () {
        $("#arthurP").html(" ");
        x=0;
        $("#bKnightP").html(" ");
        i=0;
        $("#arthurImg").fadeIn(500).fadeIn("#textArthur");
        $("#bKnightImg").fadeIn(500);
        $("#endGameB").fadeOut(500);
    });
});


