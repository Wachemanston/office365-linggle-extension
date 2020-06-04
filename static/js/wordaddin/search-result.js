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

    segment_digits: (number) => {
        const segmentSize = 3;
        const numberToStr = number.toString();
        const digits = numberToStr.length;
        let segmentNumber = '';
        for (let i = 1; i <= digits; i += 1) {
            segmentNumber = `${!(i % segmentSize) && i !== digits ? ',' : ''}${numberToStr[digits - i]}${segmentNumber}`;
        }
        return segmentNumber;
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
        if (Object.keys(data).length === 0) {
            searchResult.html('<div class="container"><h3>No result</h3></div>');
        } else {
            let htmlFrag = '';
            $.each(data, (ngram, obj) => {
                const { percent, count: ctn } = obj;
                const count = SearchResult.segment_digits(ctn);
                // TODO: template literals is in ES6, which is not compatible with IE11
                htmlFrag += `<ul class="list-group"><li class="list-group-item">
                    <span class="badge"><h5>${count}</h5></span>
                    <span>${percent} %</span>
                    <h4>${ngram}</h4>
                    <div class="progress"><div class="progress-bar" role="progressbar" style="width:${percent}%"></div>
                    </div></li></ul>`;
            });
            searchResult.html(htmlFrag);
        }
    },
};

export default SearchResult;
