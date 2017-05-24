// DATA
var EXAMPLE = {
    "CMD": [
        "adj. beach",
        "cultivate n.",
        "v. an/a adj. role",
        // "take $D ... trip",
        "go ?to home",
        "how to v. n.",
        "play det. ~important role/part"

    ],
    "HLI": [
        "How to describe beach?",
        // "Which is popular stay at home or stay to home?",
        "Describe beach",
        // "Which one is better do research or conduct research?",
        // "Which expression is correct, go home or go to home?",
        "Which is correct, go home or go to home?",
        "What verb goes with an important role?",
        "What preposition should be used after analysis?",
    ]
};
var HELP = {
  "CMD": [
    {
      '<span>_</span>' : 'search for <span>any</span> word',
      '': '<div class="des">[ listen <span>_</span> music ] --> [ listen <span>to</span> music ]</div>',
    },
    {
      '<span>~</span><m>TERM</m>' : 'search for the <span>similar</span> words of <m>TERM</m>',
      '': '<div class="des">[ <span>~reliable</span> person ] --> [ <span>trustworthy</span> person ]</div>',
    },
    {
      '<span>?</span><m>TERM</m>' : 'search for <m>TERM</m> <span>optionally</span>',
      '': '<div class="des">[ listen <span>?to</span> music ] --> [ listen <span>to</span> music ]</div><div class="des">[ discuss <span>?prep.</span> it ] --> [ discuss it ]',
    },
    {
      '<span>*</span>' : 'match <span>zero or more</span> words',
      '': '<div class="des">[ play <span>*</span> role ] --> [ play <span>a</span> role ] and [ play <span>an important</span> role ]</div>',
    },
    {
      'TERM1<span>/</span>TERM2' : 'with either TERM1 <span>or</span> TERM2, or search for alternative words',
      '': '<div class="des">[ go <span>in/to</span> school ] --> [ go <span>to</span> school ]</div>',
    },
    {
      '<span>part-of-speech</span>' : 'search for word with specific part-of-speech tag',
      '': '<div class="des">[ <span>v.</span> a report ] --> [ <span>submit</span> a report ]</div><br><span>v.</span>(verb), <span>n.</span>(noun), <span>adj.</span>(adjective), <span>adv.</span>(adverb) and <span>prep.</span>(preposition), <span>det.</span>(determiner), <span>conj.</span>(conjunction), <span>pron.</span>(pronoun), <span>interj.</span>(interjection)'
    },
    {
      '<div class="note"><span>note</span></div>' : 'the maximum number of words in a query is <span>5</span>',
    },
  ],
    "HLI": [
        {"<span>Which</span>"       :   "Which ____ is ____, <span>item A</span> or <span>item B</span>"},
        {"<span>How</span>"         :   "How to ____ <span>item A</span>?"},
        {"<span>What</span>"        :   "What <span>$POS</span> ____ after/before/with  <span>item A</span>?<br><br>$POS can be verb, noun, adjective, adverb or preposition, determiner"},
    ]
}
var sents = [
    "Sandy Beach contains two distinct game modes",
    "Sandy Beach (Beach de Oshiro wo Tsukutcha Wow! in Japan)",
    "Sandy Beach is a video game developed by Frozen Codebase and published by Konami Frozen Codebase and published by Konami"
]
