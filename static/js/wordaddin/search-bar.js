import SearchResult from './search-result';

const SearchBar = {

    init: () => {
        const brandIcon = $('.linggle.navbar .navbar-brand');
        const searchBar = $('.linggle #search-bar');
        const searchResultPage = $('.linggle.search-result');
        const searchBarBtn = $('#search-bar-btn');

        // Register events
        searchBarBtn.click(SearchBar.handleOnClickSearchBarBtn);
        searchBar.on('input', SearchBar.query);
        $('form:has(#search-bar)').submit(() => {
            SearchBar.query();
            // return false to prevent default and stop propagation
            return false;
        });
    },

    handleOnClickSearchBarBtn: () => {
        SearchBar.query();
    },

    query: () => {
        const searchBar = $('.linggle #search-bar');
        const query = escape(searchBar.val().trim());

        if (query) {
            SearchResult.query(query);
        }
    },
};

export default SearchBar;
