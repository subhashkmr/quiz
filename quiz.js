function submitAnswers(){
	var total=5;
	var score=0;
    var q1 = document.querySelector(".q1").value("b");
	var q2 = document.querySelector(".q2").value();
	var q3 = document.querySelector(".q3").value();
    var q4 = document.querySelector(".q4").value();
    var q5 = document.querySelector(".q5").value();
    var h =["q1" ,"q2" ,"q3" ,"q4 ","q5"]
    var p =["b","d","b","d","a"]
    for (var i = 0; i < h.length; i++) {
    	for (var i = 0; i < p.length; i++) {
    	if(h[i] === p[i]){ score++;
    	}
    } }
    var results = document.getElementById("#results");
	results.innerHTML = '<h3>Result: You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	alert('You scored '+score+' out of '+total);
    return false;

}
