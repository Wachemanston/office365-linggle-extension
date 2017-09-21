var IntroSlides = {
  init: function() {

    var introSlides = [
      {
        'title': '<h2>Writing Ahead</h2>',
        'content':
          '<p class="text-justify">Typing a few words and then a couple of underscores ' +
            '<span class="label label-default label-red">_</span> ' +
            'allows you to find recurring phrases following the words.' +
          '</p>',
        'examples':
          '<ul>' +
            '<li>present a method <span class="highlight strong">_</span></li>' +
            '<li>present a method <span class="highlight strong">_ _</span></li>' +
            '<li>' +
              '<button type="button" class="linggle btn btn-green btn-sm" id="tour1">' +
                '<span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span> Guide' +
              '</button>' +
            '</li>' +
          '</ul>' +
          '<h5>Note that a query for more than 5 words ' +
          '(e.g. <span class="highlight strong">present a method _ _ _</span> ) returns nothing.</h5>',
        'fake-search-bar-text': 'present a method _',
        'fake-search-result': [
          {
            'ngram': 'present a method <span class="highlight">for</span>',
            'percent': '46%'
          },
          {
            'ngram': 'present a method <span class="highlight">to</span>',
            'percent': '21%'
          },
          {
            'ngram': 'present a method <span class="highlight">of</span>',
            'percent': '11%'
          },
          {
            'ngram': 'present a method <span class="highlight">that</span>',
            'percent': '7%'
          }
        ]
      },
      {
        'title': '<h2>Checking Whether a Word Is Needed</h2>',
        'content':
          '<p class="text-justify">A question mark ' +
            '<span class="label label-default label-red">?</span> ' +
            'followed by a word (e.g., to) allows you to check whether the word is needed in a phrase.' +
          '</p>',
        'examples':
          '<ul>' +
            '<li>go <span class="highlight">?to</span> ask your mom' +
            '<li>discuss <span class="highlight">?about</span> the issue</li>' +
            '<li>' +
              '<button type="button" class="linggle btn btn-green btn-sm" id="tour2">' +
                '<span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span> Guide' +
              '</button>' +
            '</li>' +
          '</ul>',
        'fake-search-bar-text': 'discuss ?about the issue',
        'fake-search-result': [
          {
            'ngram': 'discuss the issue',
            'percent': '99%'
          },
          {
            'ngram': 'discuss <span class="highlight">about</span> the issue',
            'percent': '1%'
          }
        ]
      },
      {
        'title': '<h2>Deciding on Alternative Phrases</h2>',
        'content':
          '<p class="text-justify">One of the test items of a College Entrance English Exam of Taiwan (2013), ' +
            'contains a problematic phrase, ' + 
            '&ldquo;not in the position to&rdquo;, ' +
            'according to an expert. <br>' +
            'Linggle <span class="highlight">not in <span class="label label-default label-red">the/a</span> position to</span> ' +
            'and you will get the frequency ratios of ' +
            '<span class="strong">not in the position</span> to (4%) and ' +
            '<span class="strong">not in a position</span> to (94%). ' +
            'Phrases with a high frequency count are usually preferred.' +
          '</p>',
        'examples':
          '<ul>' +
            '<li>not in <span class="highlight">the/a</span> position to</li>' +
            '<li>play an important <span class="highlight">role/part</span></li>' +
            '<li>' +
              '<button type="button" class="linggle btn btn-green btn-sm" id="tour3">' +
                '<span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span> Guide' +
              '</button>' +
            '</li>' +
          '</ul>',
        'fake-search-bar-text': 'not in the/a position to',
        'fake-search-result': [
          {
            'ngram': 'not in <span class="highlight">a</span> position to',
            'percent': '95%'
          },
          {
            'ngram': 'not in <span class="highlight">the</span> position to',
            'percent': '5%'
          }
        ]
      },
      // {
      //   'title': '<h2>Searching for synonyms</h2>',
      //   'content':
      //     '<p class="text-justify">A tilde <span class="label label-default label-red">~</span> ' +
      //       'before a keyword allows you to search for synonyms. ' +
      //       'For synonyms appearing in a certain context, simply add words before or after the keyword. ' +
      //       '(e.g. <span class="highlight">~reliable evidence</span>). ' +
      //       'You will find some relevant synonyms in context: ' + 
      //       'e.g. credible, verifiable, and robust.' +
      //     '</p>',
      //   'examples':
      //     '<ul>' +
      //       '<li>supported by <span class="highlight">~reliable</span> evidence</li>' +
      //       '<li>a <span class="highlight">~reliable</span> friend</li>' +
      //       '<li>' +
      //         '<button type="button" class="linggle btn btn-green btn-sm" id="tour4">' +
      //           '<span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span> Guide' +
      //         '</button>' +
      //       '</li>' +
      //     '</ul>',
      //   'fake-search-bar-text': 'supported by ~reliable evidence',
      //   'fake-search-result': [
      //     {
      //       'ngram': 'supported by <span class="highlight">credible</span> evidence',
      //       'percent': '82%'
      //     },
      //     {
      //       'ngram': 'supported by <span class="highlight">reliable</span> evidence',
      //       'percent': '14%'
      //     },
      //     {
      //       'ngram': 'supported by <span class="highlight">robust</span> evidence',
      //       'percent': '4%'
      //     }
      //   ]
      // },
      {
        'title': '<h2>Finding Collocations</h2>',
        'content':
          '<p class="text-justify">Linggle\'s unique and very best feature is that keywords can be ' + 
          'combined with any part of speech to create a search query for finding collocations. ' + 
          ' For example, Linggle ' +
          '<span class="label label-default label-red">v.</span> <span class="highlight">death penalty</span> ' +
          'to find verb collocates of death penalty. ' + 
          'The results are on par with what is available in a collocation dictionary.' +
          '</p>',
        'examples':
          '<ul>' +
            '<li><span class="highlight">v.</span> death penalty</li>' +
            '<li>acquire <span class="highlight">n.</span></li>' +
            '<li>' +
              '<button type="button" class="linggle btn btn-green btn-sm" id="tour5">' +
                '<span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span> Guide' +
              '</button>' +
            '</li>' +
          '</ul>',
        'fake-search-bar-text': 'v. death penalty',
        'fake-search-result': [
          {
            'ngram': '<span class="highlight">face</span> death penalty',
            'percent': '13%'
          },
          {
            'ngram': '<span class="highlight">seek</span> death penalty',
            'percent': '7%'
          },
          {
            'ngram': '<span class="highlight">faces</span> death penalty',
            'percent': '7%'
          },
          {
            'ngram': '<span class="highlight">replacing</span> death penalty',
            'percent': '6%'
          }
        ]
      },
      {
        'title': '<h2>Precise Collocation Queries</h2>',
        'content':
          '<p class="text-justify">' +
            'Linggle uses a simple strategy to handle queries that involve parts of speech. ' + 
            'Yet, POS can be ambiguous at times, leading to less than perfect results when it comes to POS queries. ' +
            'For example, the query <span class="highlight">v. difficulty</span> returns <span class="strong">learning difficulty</span> as the top result, ' +
            'while <span class="highlight">play n.</span> brings back <span class="strong">play station</span>! ' +
            'In fact, both should be classified as NN. <br>' +
            'There are other problems with using a simple search query like <span class="highlight">v. difficulty</span>: ' + 
            'missing verbal phrase (run into) and a lack of information related to articles in the retrieved phrases. ' +
            'For this, it would be better to use a slightly more complex query, ' +
            'e.g., <span class="label label-default label-red">pron. v. ?prep. ?det. difficulty</span>. ' + 
            'Here <span class="strong">pron.</span> is added so that <span class="strong">v.</span> can match a real verb ' +
            '(instead of seemingly correct verbs like <span class="strong">learning</span>). ' +
            'The optional POS wildcard <span class="strong">?prep.</span> after <span class="strong">v.</span> allows phrasal verbs' +
            '(e.g., <span class="strong">run into</span>) to be found. ' +
            'The <span class="strong">?det.</span> before difficulty allows us to find the use of articles.' +
          '</p>',
        'examples':
          '<ul>' +
            '<li>to v. ?prep. ?det. difficulty/difficulties</li>' +
            '<li>' +
              '<button type="button" class="linggle btn btn-green btn-sm" id="tour6">' +
                '<span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span> Guide' +
              '</button>' +
            '</li>' +
          '</ul>',
        'fake-search-bar-text': 'to v. ?prep. ?det. difficulty/difficulties',
        'fake-search-result': [
          {
            'ngram': 'to <span class="highlight">have</span> difficulty',
            'percent': '22%'
          },
          {
            'ngram': 'to <span class="highlight">overcome the</span> difficulties',
            'percent': '7%'
          },
          {
            'ngram': 'to <span class="highlight">overcome</span> difficulties',
            'percent': '6%'
          },
          {
            'ngram': 'to <span class="highlight">have</span> difficulties',
            'percent': '6%'
          }
        ]
      }
    ];

    var html = '';

    // json to html string
    introSlides.forEach(function(introSlide, index) {

      var fakeSearchResultHTML = '';
      
      introSlide['fake-search-result'].forEach(function(searchResult) {
        fakeSearchResultHTML +=
          '<div class="fake-search-result-listitem">' +
            searchResult['ngram'] +
            '<div class="progress">' +
              '<div class="progress-bar" role="progressbar" style="width:' + searchResult['percent'] + ';"></div>' +
            '</div>' +
          '</div>';
      });

      html +=
        '<div class="row">' +
          '<div class="col-sm-7">' +
            introSlide['title'] +
            introSlide['content'] +
            introSlide['examples'] +
          '</div>' +
          '<div class="col-sm-5">' +
            '<div class="panel panel-default">' +
              '<div class="panel-body">' +
                '<div class="fake-search-bar">' +
                  introSlide['fake-search-bar-text'] +
                  '<span class="pull-right"><i class="fa fa-search"></i></span>' +
                '</div>' +
                fakeSearchResultHTML +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    });

    var introSlidesPage = $('.linggle .intro-slides');

    // render html
    introSlidesPage.html(html);

    var toursIds = ['#tour1', '#tour2', '#tour3', '#tour4', '#tour5', '#tour6'];
    toursIds.forEach(function(tourId, index) {
      $(tourId).on('click', function() {
        tours[tourId].start();
      });
    });
  }
}
