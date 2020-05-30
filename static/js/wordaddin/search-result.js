import SearchBar from './search-bar';

const SearchResult = {
    query: (query) => {
        $.ajax({
            url: '/query/' + query,
            // url: 'https://ironman.nlpweb.org:9488/?search=' + query,
            type: 'GET',
            dataType: 'json',
        }).done(SearchResult.renderSearchResult).fail(SearchResult.renderSearchFail);
    },

    clear: () => {
        const searchResult = $('.linggle.search-result');
        searchResult.html('');
    },

    renderSearchFail: () => {
        const searchResult = $('.linggle.search-result');
        const htmlFrag = '<div class="container">Something goes wrong.' +
            '<button type="button" class="btn btn-danger" id="btn-refresh">' +
            '<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>Try again' +
            '</button></div>';
        searchResult.html(htmlFrag);
        $('#btn-refresh').on('click', () => {
            SearchBar.query();
        });
    },

    renderSearchResult: (data) => {
        const searchResult = $('.linggle.search-result');
        let htmlFrag = (data.length > 0) ? '' : '<div class="container"><h3>No result</h3></div>';

        data.forEach((element) => {
            const ngramstr = element.phrase.join(' ');
            const percentstr = element.percent;
            const countstr = element.count_str;
            const ngramIdstr = element.phrase.join('_');
            // TODO: template literals is in ES6, which is not compatible with IE11
            htmlFrag += '<ul class="list-group"><li class="list-group-item">' +
                '<span class="badge"><h5>' + countstr + '</h5></span>' +
                '<span>' + percentstr + '</span>' +
                '<h4>' + ngramstr + '</h4>' +
                '<div class="progress"><div class="progress-bar" role="progressbar" style="width: ' + percentstr + '"></div>' +
                '</div></li></ul>';
        });
        searchResult.html(htmlFrag);
    },
};

export default SearchResult;
