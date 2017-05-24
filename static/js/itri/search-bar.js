var SearchBar = {

  init: function() {
    var brandIcon = $('.linggle.navbar .navbar-brand');
    var searchBar = $('.linggle #search-bar');
    var searchResultPage = $('.linggle.search-result');
    var searchBarBtn = $('#search-bar-btn');

    // Register events
    brandIcon.click(this.handleOnClickBrandIcon);
    searchBar.focus(this.handleOnFocus);
    searchBar.blur(this.handleOnBlur);
    searchBar.on('input', this.query);
    searchBarBtn.click(this.handleOnClickSearchBarBtn);

    $('form:has(#search-bar)').submit(function(e) {
      SearchBar.query();
      // return false to prevent default and stop propagation
      return false;
    });
  },

  handleOnFocus: function(e) {
    var landingPage = $('.linggle.landing');
    var searchResultPage = $('.linggle.search-result');

    // toggle visibility
    landingPage.hide();
    searchResultPage.fadeIn(200);
  },

  handleOnBlur: function(e) {
    var landingPage = $('.linggle.landing');
    var searchResultPage = $('.linggle.search-result');
    var searchBar = $('.linggle #search-bar');

    // no input text
    if(!searchBar.val().trim()) {
      // toggle visibility
      landingPage.fadeIn(200);
      searchResultPage.hide();
    }
  },

  handleOnClickBrandIcon: function(e) {
    var searchBar = $('.linggle #search-bar');
    var landingPage = $('.linggle.landing');
    var searchResultPage = $('.linggle.search-result');

    // clear input text
    searchBar.val('');
    // clear search results
    SearchResult.clear();
    // toggle visibility
    landingPage.fadeIn(200);
    searchResultPage.hide();
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
