var SearchResult = {
  query: function(query) {
    $.ajax({
      url: '/query/' + query,
      //url: 'https://ironman.nlpweb.org:9488/?search=' + query,
      type: 'GET',
      dataType: 'json'
    }).done(this.renderSearchResult).fail(this.renderSearchFail);
  },

  clear: function() {
    var searchResult = $('.linggle.search-result');
    searchResult.html('');
  },

  renderSearchFail: function(data) {
    var searchResult = $('.linggle.search-result');
    var htmlFrag =  '<div class="container">Something goes wrong.' +
      '<button type="button" class="btn btn-danger" id="btn-refresh">' +
        '<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>Try again' +
      '</button></div>';
    searchResult.html(htmlFrag);
    $('#btn-refresh').on('click',function(){
      SearchBar.query();
    });
  },

  renderSearchResult: function(data) {
    var searchResult = $('.linggle.search-result');
    var htmlFrag = (data.length > 0) ? '':'<div class="container"><h3>No result</h3></div>';

    data.forEach(function(element) {
      var ngramstr = element.phrase.join(' ');
      var percentstr = element.percent;
      var countstr = element.count_str;
      var ngramIdstr = element.phrase.join('_');
      // TODO: template literals is in ES6, which is not compatible with IE11
      htmlFrag += '<ul class="list-group"><li class="list-group-item">' +
            '<span class="badge"><h5>' + countstr + '</h5></span>' +
            '<span>' + percentstr + '</span>' +
            '<h4>' + ngramstr + '</h4>' +
            '<div class="progress"><div class="progress-bar" role="progressbar" style="width: ' + percentstr + '"></div>' +
            '</div></li></ul>';
    });
    searchResult.html(htmlFrag);
  }
}
