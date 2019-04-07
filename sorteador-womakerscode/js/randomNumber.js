function IsNumeric(n){
    return !isNaN(n);
} 

$(function(){
	
    $("#gogogo").click(function() {
    
        var numLow = 1;
        var numHigh = 40;
        
        var adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1;
        
        var numRand = Math.floor(Math.random()*adjustedHigh) + parseFloat(numLow);
        
        if ((IsNumeric(numLow)) && (IsNumeric(numHigh)) && (parseFloat(numLow) <= parseFloat(numHigh)) && (numLow != '') && (numHigh != '')) {
            $("#randomnumber").text(numRand);
        } else {
            $("#randomnumber").text("Ooops! Ocorreu um problema. Tente novamente.");
        }
        
        return false;
    });
	
});
