var tours = [];
//tour1
tours['#tour1'] = new Tour({
  storage: false,
  steps: [
  {
    element: ".linggle.navbar.navbar-default",
    title: "任意字詞",
    content: "只要在 present a method 後面加上一個底線符號，就能找到後面該接什麼字了～",
    backdrop: true,
    placement: "auto",
    onShow: function () {
      var sBar = $('.linggle #search-bar');
      sBar.val("present a method _");
      SearchBar.query();
    },
    onNext: function() {
      var sBar = $('.linggle #search-bar');
      sBar.focus();

    },
    onHidden: function() {
      $('.ngram').first().attr('id', 'tour-ngram');
      $('.count').first().attr('id', 'tour-count');
      $('.example').first().attr('id', 'tour-example');
    }
  },
  {
    element: "#tour-ngram",
    content: "這些介系詞都是適合接在 present a method 後面使用的。",
    placement: "bottom",
  },
  {
    element: "#tour-count",
    content: "這是片語出現的次數與百分比，頻率越高代表這個組合越常被使用。",
    placement: "bottom",
  },
  {
    element: "#tour-example",
    content: "點擊則會出現參考例句。",
    placement: "left",
    onNext: function() {
      var sBar = $('.linggle #search-bar');
      sBar.val("present a method _ _");
      SearchBar.query();
    },
  },
  {
    element: "#tour-ngram",
    content: "如果再加一個底線，又會再往後多找一個字，這時候就可以發現，a method for 後面通常要使用動名詞。",
    placement: "bottom",
  },
]});
//#tour2
tours['#tour2'] = new Tour({
  storage: false,
  steps: [
  {
    element: ".linggle.navbar.navbar-default",
    title: "用字檢查",
    content: "不知道介系詞該不該放？只要在字的前面加上一個問號，Linggle 馬上告訴你！",
    backdrop: true,
    placement: "auto",
    onShow: function () {
      var sBar = $('.linggle #search-bar');
      sBar.val("discuss ?about the issue");
      SearchBar.query();
    },
    onNext: function() {
      var sBar = $('.linggle #search-bar');
      sBar.focus();

    },
    onHidden: function() {
      $('.ngram').first().attr('id', 'tour-ngram');
      $('.count').first().attr('id', 'tour-count');
      $('.example').first().attr('id', 'tour-example');
    }
  },
  {
    element: "#tour-count",
    content: "從數據上很明顯可以看到在這個例子裡，discuss 後面不需要加上 about 這個字，只需要直接接上要討論的事情就可以了。",
    placement: "bottom",
  },
  {
    element: "#tour-example",
    content: "點擊則會出現參考例句。",
    placement: "left",
  },
]});
//tour3
tours['#tour3'] = new Tour({
  storage: false,
  steps: [
  {
    element: ".linggle.navbar.navbar-default",
    title: "替換字詞",
    content: "當有兩個字不知道該用哪一個的時候，只要將兩個字用斜線串聯起來，Linggle 就會告訴你該用誰！",
    backdrop: true,
    placement: "auto",
    onShow: function () {
      var sBar = $('.linggle #search-bar');
      sBar.val("in/at the afternoon");
      SearchBar.query();
    },
    onNext: function() {
      var sBar = $('.linggle #search-bar');
      sBar.focus();

    },
    onHidden: function() {
      $('.ngram').first().attr('id', 'tour-ngram');
      $('.count').first().attr('id', 'tour-count');
      $('.example').first().attr('id', 'tour-example');
    }
  },
  {
    element: "#tour-count",
    content: "從數據上不難發現，用 in the afternoon 的人比 at the afternoon 的人多很多呢！",
    placement: "bottom",
  },
  {
    element: "#tour-example",
    content: "點擊則會出現參考例句。",
    placement: "left",
  },
]});
//tour4
tours['#tour4'] = new Tour({
  storage: false,
  steps: [
  {
    element: ".linggle.navbar.navbar-default",
    title: "同義詞查詢",
    content: "在字的前面加上波浪號，就可以查詢同義詞了！",
    backdrop: true,
    placement: "auto",
    onShow: function () {
      var sBar = $('.linggle #search-bar');
      sBar.val("supported by ~reliable evidence");
      SearchBar.query();
    },
    onNext: function() {
      var sBar = $('.linggle #search-bar');
      sBar.focus();

    },
    onHidden: function() {
      $('.ngram').first().attr('id', 'tour-ngram');
      $('.count').first().attr('id', 'tour-count');
      $('.example').first().attr('id', 'tour-example');
    }
  },
  {
    element: "#tour-ngram",
    content: "除了單一的同義詞，Linggle 也可以查到配合前後文的同義詞呢～",
    placement: "bottom",
  },
  {
    element: "#tour-example",
    content: "點擊則會出現參考例句。",
    placement: "left",
  },
]});
//tour5
tours['#tour5'] = new Tour({
  storage: false,
  steps: [
  {
    element: ".linggle.navbar.navbar-default",
    title: "任意詞性",
    content: "想不到合適的動詞搭配\"death penalty\"嗎？來看看 Linggle 給你什麼建議吧！",
    backdrop: true,
    placement: "auto",
    onShow: function () {
      var sBar = $('.linggle #search-bar');
      sBar.val("v. death penalty");
      SearchBar.query();
    },
    onNext: function() {
      var sBar = $('.linggle #search-bar');
      sBar.focus();

    },
    onHidden: function() {
      $('.ngram').first().attr('id', 'tour-ngram');
      $('.count').first().attr('id', 'tour-count');
      $('.example').first().attr('id', 'tour-example');
    }
  },
  {
    element: "#tour-ngram",
    content: "這些都是可以用來搭配\"death penalty\"的詞彙喔～",
    placement: "bottom",
  },
  {
    element: "#tour-example",
    content: "點擊則會出現參考例句。",
    placement: "left",
  },
]});
//tour6
tours['#tour6'] = new Tour({
  storage: false,
  steps: [
  {
    element: ".linggle.navbar.navbar-default",
    title: "精準搭配詞",
    content: "想讓查詢更精準可以搭配各式的查詢元素來使用。",
    backdrop: true,
    placement: "auto",
    onShow: function () {
      var sBar = $('.linggle #search-bar');
      sBar.val("to v. ?prep. ?det. difficulty/difficulties");
      SearchBar.query();
    },
    onNext: function() {
      var sBar = $('.linggle #search-bar');
      sBar.focus();

    },
    onHidden: function() {
      $('.ngram').first().attr('id', 'tour-ngram');
      $('.count').first().attr('id', 'tour-count');
      $('.example').first().attr('id', 'tour-example');
    }
  },
  {
    element: "#tour-ngram",
    content: "這些都是可以和 diffuculty 或是 difficulties 搭配使用的動詞。",
    placement: "bottom",
  },
  {
    element: "#tour-example",
    content: "點擊則會出現參考例句。",
    placement: "left",
  },
]});

tours.forEach(function(tour) {
  tour.init();
});
