var SearchBar = {

  init: function() {
    var brandIcon = $('.linggle.navbar .navbar-brand');
    var searchBar = $('.linggle #search-bar');
    var searchResultPage = $('.linggle.search-result');
    var searchBarBtn = $('#search-bar-btn');

    // Register events
    searchBarBtn.click(this.handleOnClickSearchBarBtn);
    searchBar.on('input', this.query);
    $('form:has(#search-bar)').submit(function(e) {
      SearchBar.query();
      // return false to prevent default and stop propagation
      return false;
    });
  },

  handleOnClickSearchBarBtn: function(e) {
    SearchBar.query();
  },

  query: function() {
    var searchBar = $('.linggle #search-bar');
    var query = escape(searchBar.val().trim());

    if (query) {
      SearchResult.query(query);
    }
  }
}
