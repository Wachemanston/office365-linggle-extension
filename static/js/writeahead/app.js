/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

'use strict';

(function () {

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            $("#div1").css({display:'block', opacity:'0'})
                .animate({opacity:'1',left:"+=5px"}, 1500);
            $("#run").click(initSearch);
            detectText();
        });
    };

    function initSearch() {
        $(".homepage").hide();
        $(".search-area").show().css('display', 'flex');

        if(bodyText.length == 0) {
            search("Welcome");
        }
    }

    var bodyText = '';
    function detectText() {
        return Word.run(function(context) {
            var body = context.document.body;
            context.load(body, 'text');
            context.sync().then(function() {
                var text = body.text.trim();
                if(text.length > 0) {
                    search(text, context);
                }
            });
            setTimeout(detectText, 1000);
        });
    }

    function search(text, context) {
        if (text != bodyText) {
            bodyText = text;
            var words = text.split(" ");
            var word = words[words.length - 1];
            $('#t1').html(word);
            $.ajax({
                url: "/pg/" + word,
                type: 'GET',
                dataType: 'text',
                xhrFields: {
                    withCredentials: true
                },
                success: function (text) {
                    context.sync().then(function() {
                        $('#t2').html(text);
                    });
                }
            })
        }
    }

    // $(document).ready(function () {
    //   $("#div1").css({display:'block', opacity:'0'})
    //     .animate({opacity:'1',left:"+=5px"}, 1500);
    //   $("main").html('<p id="t1"></p><p id="t2"></p>');
    //   search("Welcome");
    // });
})();
