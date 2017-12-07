var quoteApp = (function(){
	var quotes = [];
	var colors = ["#262b53","#6d5a7f","#ae7182","#ffb985","#262533","#63352b","#9c6638"];
	var	uniqueQuotes = [];
	var uniqueColors = [];
	var quoteObj = {
		markTwain: {
		  'quote':'If you tell the truth you don\'t have to remember anything',
		  'source':'Mark Twain',
		  'citation':'Notebook',
		  'year':'1894',
		  'tags':'motivation'
		},
		muhammadAly: {
		  'quote' : "I hate every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.",
		  'source' : 'Muhammad Ali',
		  'tags' : 'motivation'    
		},
		johnKennedy: {
		  'quote' : 'Change is the law of life. And those who look only to the past or present are certain to miss the future.',
		  'source' : 'John F. Kennedy',
		  'year' : '1963',
		  'tags' : 'politics'    
		},
		fdr: {
		  'quote' : 'Happiness lies in the joy of achievement and the thrill of creative effort.',
		  'source' : 'Franklin D. Roosevelt',
		  'citation' : 'Inagural Speech',
		  'year' : '1933',
		  'tags' : 'motivation'    
		},
		yogi: {
		  'quote' : 'I never said most of things I said.',
		  'source' : 'Yogi Berra',
		  'tags' : 'humor'    
		},
		don: {
		  'quote' : 'Procrastination is the art of keeping up with yesterday',
		  'source' : 'Don Marquis',
		  'tags' : 'humor'  
		},
		johnKennedy2: {
		  'quote' : 'Let us not seek the Republican answer or the Democratic answer, but the right answer. Let us not seek to fix the blame for the past. Let us accept our own responsibility for the future.',
		  'source' : 'John F. Kennedy',
		  'tags' : 'politics'    
		},
	};	
	return {
		init:function(){
			this.addQuotes();
			this.clickEvent();
		},
		addQuotes:function(){
			var quoteNames = Object.keys(quoteObj);
			quoteNames.forEach(function(quote){
				quotes.push(quoteObj[quote]);
			});
		},
		clickEvent:function(){
			var quoteButton = document.getElementById('loadQuote');
			quoteButton.addEventListener('click',function(){
				quoteApp.printQuote();
			});			
		},
		getRandomQuote:function(){
			if(!uniqueQuotes.length){
				for(var i = 0; i < quotes.length; i++){
					uniqueQuotes.push(i);
				}
			}
			var index = Math.floor(Math.random() * uniqueQuotes.length);
			var val = uniqueQuotes[index];
			uniqueQuotes.splice(index, 1);
			return quotes[val];
		},
		getRandomColor:function(){
			if(!uniqueColors.length){
				for (var i = 0; i < colors.length; i++){
					uniqueColors.push(i);
				}
			}
			var index = Math.floor(Math.random() * uniqueColors.length);
			var val = uniqueColors[index];
			uniqueColors.splice(index, 1);
			return val;
		},
		printQuote:function(){
			var getQuote = this.getRandomQuote();
			var quote = getQuote.quote;		
			var sourceQuote = getQuote.source;
			var citationQuote;
			var yearQuote;

			//THIS CHECKS THE OBJECT TO SEE IF A PARTICULAR PROPERTY IS "UNDEFINED"
			if(typeof getQuote.citation === "undefined"){
				citationQuote = "";
			} else {
				citationQuote = getQuote.citation;
			}
			if(typeof getQuote.year === "undefined"){
				yearQuote = "";
			} else {
				yearQuote = getQuote.year; 
			}

			//BEGIN BUILDING THE ELEMENTS TO PLACE INTO THE DOM
			var printOut = "<p class='quote'>";
			printOut += quote;
			printOut += "</p><p class='source'>";
			printOut += sourceQuote;

			if(citationQuote === "" && yearQuote === ""){
				printOut += "</p>";

			} else if(citationQuote !== "" && yearQuote === ""){
				printOut += "<span class='citation'>";
				printOut += citationQuote;
				printOut += "</span></p>";

			} else if(citationQuote === "" && yearQuote !== ""){
				printOut += "<span class='year'>";
				printOut += yearQuote;
				printOut += "</span></p>";		

			} else {
				printOut += "<span class='citation'>";
				printOut += citationQuote;
				printOut += "</span>";
				printOut += "<span class='year'>";
				printOut += yearQuote;
				printOut += "</span></p>";	
			}
			
			var randomColorNumber = this.getRandomColor();
			document.getElementsByTagName('body')[0].style.backgroundColor = colors[randomColorNumber];
			document.getElementById('loadQuote').style.backgroundColor = colors[randomColorNumber];
			document.getElementById('quote-box').innerHTML = printOut;
		}		
	};
}());

quoteApp.init();