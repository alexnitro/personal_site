var javaScriptPrograms = (function(){
	return {
		pigLatin:function(str){
		  var vowels = ['a','e','i','o','u'];
		  var strSplit = str.split('');
		  var num = 0;
		  for(var i = 0; i < strSplit.length; i++){
		    if(vowels.indexOf(strSplit[i]) > -1){
		      break; 
		    } else {
		      num ++;
		    }   
		  }
		  function constCheck(num){
		    if(num === 0){
		      return 'way';
		    } else if(num > 0){
		      return 'ay';
		    }
		  }		    
		  var sliceOff = str.substr(0, num);
		  var newWord = str.substr(num, str.length) + sliceOff + constCheck(num);
		  return newWord;
		},
		dnaParing:function(str){
		  var strSplit = str.split('');
		  var newArr = [];  
		  for(var i = 0; i < strSplit.length; i++){    
		    if(strSplit[i] === 'A'){
		      newArr.push(['A','T']);
		    } else if(strSplit[i] === 'T'){
		      newArr.push(['T','A']);
		    } else if(strSplit[i] === 'G'){
		      newArr.push(['G','C']);
		    } else if(strSplit[i] === 'C'){  
		      newArr.push(['C','G']);
		    }
		  }
		  
		  return newArr;
		},
		missingLetter:function(str){
		  var splitStr = str.split('');
		  var previousChar = splitStr[0].charCodeAt();
		  for(var i = 1; i < splitStr.length; i++){
		    var currentChar = splitStr[i].charCodeAt(0);
		    if((currentChar - previousChar) !== 1){
		      return String.fromCharCode(currentChar - 1);
		    } else {
		      previousChar = currentChar;
		    }
		  }
		},
		entityConvert:function(str){
		  // &colon;&rpar;  
		  var reg = /(&|<|>|"|')/gi;  
		  //var match = str.match(reg);
		  var replacer = function(match){
		    switch(match){
		      case '&':
		          return '&amp;';
		      case '<':
		          return '&lt;';
		      case '>':
		          return '&gt;';
		      case '"':
		          return '&quot;';
		      default:
		          return '&apos;';
		    }   
		  };		  
		  var check = str.replace(reg, replacer);
		  return check;		  
		},
		fibonacci:function(num){
		  var arr = [1,1];
		  var newNum = 0;
		  var addedNum = 0;
		  var runArr = true;
		  while(runArr){    
		    addedNum = arr[newNum] + arr[newNum + 1];
		    if(addedNum <= num){
		      arr.push(addedNum);      
		    } else {
		      runArr = false;
		    }
		    newNum++;
		  }
		  var oddArr = arr.filter(function(num){
		    return num % 2 !== 0;
		  });
		  
		  return oddArr.reduce(function(a,b){
		    return a + b;
		  });			
		},
		sumPrimes:function(num){
		  var arr = [];
		  for(var i = 2; i <= num; i++){
		     arr.push(i);
		  }
		  var reduceArr = arr.filter(function(num){
		    for(var x = 2; x < num; x++){
		      if(num % x === 0){
		        return false;
		      }
		    }
		    return num;
		  });
		  var addArr = reduceArr.reduce(function(a,b){
		    return a + b;
		  });

		  return addArr;		
		},
		smallestMultiple:function(arr){
		  var sortArr = arr.sort(function(a,b){
		    return a - b;
		  });
		  var newArr = []; 
		  for(var i = sortArr[0]; i <= sortArr[1]; i++){
		    newArr.push(i);
		  }
		  
		  var initialNum = sortArr[1] + 1;
		  var running = true;
		  do {
		    // 
		    for(var x = 0; x <= newArr.length; x++){      
		      if(initialNum % newArr[x] !== 0){
		        break;
		      }
		      if(x === newArr.length - 1){
		        return initialNum;
		      }
		    }
		    initialNum++;
		  } while(running);			
		},
		flattenArray:function(arr){
		  // I'm a steamroller, baby
		  var newArr = arr;
		  function reduce(loopArr){
		    return loopArr.reduce(function(acc,val){
		      return acc.concat(Array.isArray(val) ? reduce(val) : val);
		    }, []);
		  }  
		  return reduce(newArr);		
		},		
	};
}());