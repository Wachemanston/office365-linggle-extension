var IntroSlides = {
  init: function() {

    var introSlides = [
      {
        'title': '<h2>查詢<span class="highlight">任意</span>一至多個詞</h2>',
        'content':
          '<p>只要在你想要插入字詞的位置使用 ' +
            '<span class="label label-default label-red">* (星號)</span> ' +
            '來查詢一個詞，或是 <span class="label label-default label-red">_ (底線)</span> ' +
            '來查詢零至多個詞就可以了。' +
          '</p>',
        'examples':
          '<ul>' +
            '<li>present a method <span class="highlight strong">_</span></li>' +
            '<li>listen <span class="highlight strong">_</span> music</li>' +
            '<li>' +
              '<button type="button" class="linggle btn btn-green btn-sm" id="tour1">' +
                '<span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span> Guide' +
              '</button>' +
            '</li>' +
          '</ul>',
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
        'title': '<h2>使用<span class="highlight">問號</span>查詢是否需要某個字</h2>',
        'content':
          '<p>小明在報告裡寫了這麼一句話：“I would like to discuss about the issue.” ' +
            '回頭檢查時，總是覺得哪裡怪怪的，他很懷疑 “discuss” 後面到底需不需要加 “about” ⋯⋯ ' +
            '這時只要使用 Linggle，在你不確定的字前加上 ' +
            '<span class="label label-default label-red">? (問號)</span>，' +
            'Linggle 就會告訴你需不需要這個字囉！' +
          '</p>',
        'examples':
          '<ul>' +
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
        'title': '<h2>使用<span class="highlight">斜線號</span>查詢如何替換某字詞</h2>',
        'content':
          '<p>介系詞這麼多常常搞不清楚要用哪一個嗎？' +
            '太多字可以用卻不知道哪一個比較適合嗎？' +
            '讓 Linggle 來告訴你該怎麼選吧！很簡單，只需要在你要抉擇的兩個字中間加入 ' +
            '<span class="label label-default label-red">/ (斜線號)</span> 就可以了！' +
            '不只是介系詞，其他詞性也可以！' +
          '</p>',
        'examples':
          '<ul>' +
            '<li><span class="highlight">in/at</span> the afternoon</li>' +
            '<li>play _ important <span class="highlight">role/part</span></li>' +
            '<li>' +
              '<button type="button" class="linggle btn btn-green btn-sm" id="tour3">' +
                '<span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span> Guide' +
              '</button>' +
            '</li>' +
          '</ul>',
        'fake-search-bar-text': 'in/at the afternoon',
        'fake-search-result': [
          {
            'ngram': '<span class="highlight">in</span> the afternoon',
            'percent': '99%'
          },
          {
            'ngram': '<span class="highlight">at</span> the afternoon',
            'percent': '1%'
          }
        ]
      },
      // {
      //   'title': '<h2>使用<span class="highlight">波浪號</span>查詢同義詞</h2>',
      //   'content':
      //     '<p>在關鍵詞前加上 <span class="label label-default label-red">~ (波浪號)</span> 就可以查詢該同義詞。' +
      //       '如果要配合寫作的脈絡來查詢的同義詞，' +
      //       '只要在關鍵詞的左右加上前後文就可以囉！' +
      //       'Linggle 可以查到配合前後文的同義詞，這可是紙本同義詞典做不到的呢！' +
      //     '</p>',
      //   'examples':
      //     '<ul>' +
      //       '<li><span class="highlight">~reliable</span></li>' +
      //       '<li>supported by <span class="highlight">~reliable</span> evidence</li>' +
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
      //       'percent': '66%'
      //     },
      //     {
      //       'ngram': 'supported by <span class="highlight">adequate</span> evidence',
      //       'percent': '18%'
      //     },
      //     {
      //       'ngram': 'supported by <span class="highlight">reliable</span> evidence',
      //       'percent': '11%'
      //     },
      //     {
      //       'ngram': 'supported by <span class="highlight">robust</span> evidence',
      //       'percent': '3%'
      //     }
      //   ]
      // },
      {
        'title': '<h2>使用<span class="highlight">任意詞性</span>查詢搭配詞</h2>',
        'content':
          '<p>Linggle 最大的特色，就是可以使用「關鍵詞」配合「特定詞性」來查詢各種搭配詞。' +
            '比如說，可以用 <span class="highlight">v.</span> death penalty</span> ' +
            '來查詢 “death penalty” 搭配的動詞，效果不遜於一般搭配詞典喔！' +
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
        'title': '<h2><span class="highlight">精準的</span>搭配詞查詢</h2>',
        'content':
          '<p>想要更加精準的查詢搭配詞，我們就會建議使用複雜的查詢式，' +
            '例如在想要查詢的動詞前加上一個 “to”，讓 Linggle 不至於會錯意。' +
          '</p>',
        'examples':
          '<ul>' +
            '<li>to <span class="highlight">v. ?prep. ?det. difficulty/difficulties</span></li>' +
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
          '<div class="col-sm-6">' +
            introSlide['title'] +
            introSlide['content'] +
            introSlide['examples'] +
          '</div>' +
          '<div class="col-sm-5 col-sm-offset-1">' +
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
