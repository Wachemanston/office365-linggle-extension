var tours = [];
//tour1
tours['#tour1'] = new Tour({
  storage: false,
  steps: [
  {
    element: ".linggle.navbar.navbar-default",
    title: "Writing ahead",
    content: 'Type a <b>&ldquo;_&rdquo;</b> after <b>present a method</b> ' +
              'to see the following word.',
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
    content: 'These are the words which can occur after <b>present a method</b>.',
    placement: "bottom",
  },
  {
    element: "#tour-count",
    content: "The count and ratio of the phrase: The higher the frequency, the more often the phrase is used.",
    placement: "bottom",
  },
  {
    element: "#tour-example",
    content: "Click to see examples",
    placement: "left",
    onNext: function() {
      var sBar = $('.linggle #search-bar');
      sBar.val("present a method _ _");
      SearchBar.query();
    },
  },
  {
    element: "#tour-ngram",
    content: 'Typing two <b>&ldquo;_&rdquo;</b> (i.e., _ _ ) allows you to see two words following <b>&ldquo;present a method&rdquo;</b>. ' +
             'See, it is often used with a <b>gerund</b>.',
    placement: "bottom",
  },
]});
//#tour2
tours['#tour2'] = new Tour({
  storage: false,
  steps: [
  {
    element: ".linggle.navbar.navbar-default",
    title: "Checking whether a word is needed",
    content: "Should I use a preposition after &ldquo;discuss&rdquo;? " + 
             "Type a <b>&ldquo;?&rdquo;</b> before the preposition. Linggle will show you.",
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
    content: "The contrast between the count and ratio of the two phrases shows that the preposition &ldquo;about&rdquo; is NOT needed after &ldquo;discuss&rdquo;.",
    placement: "bottom",
  },
  {
    element: "#tour-example",
    content: "Click to see examples",
    placement: "left",
  },
]});
//tour3
tours['#tour3'] = new Tour({
  storage: false,
  steps: [
  {
    element: ".linggle.navbar.navbar-default",
    title: "Which One Is Better?",
    content: "Type a slash <b>&ldquo;/&rdquo;</b> between two words. Linggle will tell you which one is better.",
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
    content: "From the contrast of the ratios of the two phrases, " +
              "it's easy to tell that people tend to use <b>&ldquo;in the afternoon&rdquo;</b> instead of <b>&ldquo;at the afternoon&rdquo;</b>",
    placement: "bottom",
  },
  {
    element: "#tour-example",
    content: "Click to see examples",
    placement: "left",
  },
]});
//tour4
tours['#tour4'] = new Tour({
  storage: false,
  steps: [
  {
    element: ".linggle.navbar.navbar-default",
    title: "Synonyms",
    content: "Add <b>&ldquo;~&rdquo;</b> before a word to search its synonyms",
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
    content: "In addition to synonyms of a single word, you can also find synonyms fitting the context with Linggle.",
    placement: "bottom",
  },
  {
    element: "#tour-example",
    content: "Click to see examples",
    placement: "left",
  },
]});
//tour5
tours['#tour5'] = new Tour({
  storage: false,
  steps: [
  {
    element: ".linggle.navbar.navbar-default",
    title: "Search for Collocations with specific Part-of-Speech",
    content: "Wondering what verbs should be used with <b>&ldquo;death penalty&rdquo;</b>? Let's see what Linggle suggests.",
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
    content: "These are collocations of <b>&ldquo;death penalty&rdquo;</b>.",
    placement: "bottom",
  },
  {
    element: "#tour-example",
    content: "Click to see examples",
    placement: "left",
  },
]});
//tour6
tours['#tour6'] = new Tour({
  storage: false,
  steps: [
  {
    element: ".linggle.navbar.navbar-default",
    title: "Precise Collocation Queries ",
    content: "You can ask Linggle to do a personalized search by combining the symbols presented so far (_, ?, /, POS).",
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
    content: "These are commmon verb collocations of diffuculty or difficulties.",
    placement: "bottom",
  },
  {
    element: "#tour-example",
    content: "Click to see examples",
    placement: "left",
  },
]});

tours.forEach(function(tour) {
  tour.init();
});
