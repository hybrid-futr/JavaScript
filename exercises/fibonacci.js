//March 2021

//5 examples of the fibonacci sequence:


//Hemingway
function fibonacci(size) {
	var first = 0, second = 1, next, count = 2, result = [first, second]; 
	
	if (size < 2)
		return "the request was made but it was not good"

	while (count++ < size){
		next = first + second;
		first = second;
		second = next;
		result.push(next);	
	}
	
	return result;
}

console.log(fibonacci(5));


//Shakespeare: A calculation in two acts!
function theSeriesOfFIBONACCI(theSize) {
 
 var theResult; //an ARRAY
 var theCounter; //a NUMBER
	
//Act I: Initiate the ZERO	
 var theResult = [0];
	
//Act II: Ye 'for loop' in which two NUMBERS are queried and summ'd
 for(theCounter = 1; theCounter < theSize; theCounter ++) {
	
	theResult[theCounter] = (theResult[theCounter - 1] || 1) +
	theResult[Math.max(0, theCounter-2)];
 }

 //fin
 return theResult;
}

console.log(theSeriesOfFIBONACCI(5));


//Breton: A dreamer
function  colette(umbrella) {
	var staircase = 0, galleons = 0, brigantines = 1;
	var armada = [galleons, brigantines], bassoon;
	Array.prototype.embrace = [].push;
	
	while (2 + staircase++ < umbrella) {
		bassoon = galleons + brigantines;
		armada.embrace(brigantines = (galleons = brigantines, bassoon));
	}
	return armada;
}

console.log(colette(5));


//Bolano: A fragmented narrative
function leonardoPisanoBigollo(l) {
	
	if (l < 0) {
		return "I'd prefer not to respond. (Although several replies occur to me.)"
	}
	
    for (var i=2,r=[0,1].slice(0,l);i<l;r.push(r[i-1]+r[i-2]),i++);
	
	//In the book, there's an unnecessary 'rationalTheorists' ARRAY here, but I left it out.
	
	return r
}

console.log(leonardoPisanoBigollo(5));


//Brown: Angels and Deamons
function theDaFibonacciCode(numeratiFettucini){
	
	var ilInumerati = [0,1,1];
	
	theIntegerThatIncrementsOneByOne = 3,
	
	theBotticelliVector = 1.61803;
	
	while (theIntegerThatIncrementsOneByOne < numeratiFettucini) {
		
		theIntegerThatIncrementsOneByOne = theIntegerThatIncrementsOneByOne +1;
		
		ilInumerati.push(
			Math.round(ilInumerati[theIntegerThatIncrementsOneByOne - 2] *
				theBotticelliVector)
		);		
	}
	
	if(ilInumerati.length > numeratiFettucini) {
		ilInumerati = ilInumerati.slice(0, numeratiFettucini);
	}
	
	return ilInumerati;
}

console.log(theDaFibonacciCode(5)); 
