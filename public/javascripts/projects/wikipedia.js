
(function(){
    var dataSearch = {
      "action": "query",
      "format": "json",
      "prop": "extracts|info",
      "list": "",
      "titles": "",
      "generator": "search",
      "exsentences": "1",
      "exlimit": "10",
      "exintro": 1,
      "exsectionformat": "plain",
      "inprop": "url",
      "gsrsearch": "einstein",
      "gsrnamespace": "0",
      "gsrlimit": "10",
      "gsrwhat": "text"
    }
    var randomSearch = {
      "action": "query",
      "format": "json",
      "prop": "extracts|info",
      "list": "",
      "titles": "",
      "generator": "random",
      "exsentences": "10",
      "exlimit": "1",
      "exsectionformat": "raw",
      "inprop": "url",
      "grnnamespace": "0"
    }      
  
    $('button').on('click',(evt) => {
      evt.preventDefault();
      if($(evt.target).hasClass('search')){
        app.beginAppRun(dataSearch);          
      } else {
        app.beginAppRun(randomSearch);
      }
    });  

    var app = {
      beginAppRun:function(beginType){        
        dataSearch.gsrsearch = $('form input').val();
        this.wikiAjax(beginType);
      },  
      wikiAjax:function(searchType){
        $.ajax({
          url:'https://en.wikipedia.org/w/api.php',
          type: 'POST',
          data: searchType,
          dataType:'JSONP',
          headers: {'Api-User-Agent': 'Example/1.0'},
          success:function(data){
              app.searchResults(data);             
          }      
        });    
      },
      clearHtml:function(el){
        $(el).html('');
      },
      searchResults:function(obj){
        this.clearHtml('#viewer-area .row');
        var pages = obj.query.pages;
        var pagesKey = Object.keys(pages) || {};
        pagesKey.forEach(function(page){
          var newDiv = document.createElement('div');
          var newh3 = document.createElement('h3');
          var aWrapper = document.createElement('a');
          $(aWrapper).prop('href', pages[page]['fullurl']);
          $(newh3).html(pages[page]['title']);      
          $(newDiv).addClass('col-md-12').append(newh3).append(pages[page]['extract']);
          $(aWrapper).addClass('col-md-8').addClass('offset-md-2');
          $(aWrapper).append(newDiv);
          $('#viewer-area .row').append(aWrapper);
        });
        $('#question-area').css('min-height','auto');
      }
    }
}());