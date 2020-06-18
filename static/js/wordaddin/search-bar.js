import SearchResult from './search-result';

const SearchBar = {

    init() {
        const brandIcon = $('.linggle.navbar .navbar-brand');
        const searchBar = $('.linggle #search-bar');
        const searchResultPage = $('.linggle.search-result');
        const searchBarBtn = $('#search-bar-btn');

        // Register events
        searchBarBtn.click(this.handleOnClickSearchBarBtn.bind(this));
        searchBar.on('input', this.query);
        $('form:has(#search-bar)').submit(() => {
            this.query();
            // return false to prevent default and stop propagation
            return false;
        });
    },

    handleOnClickSearchBarBtn() {
        this.query();
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
