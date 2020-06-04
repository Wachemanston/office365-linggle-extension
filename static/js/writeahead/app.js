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
            // if (' ,.!\n'.indexOf(BodyText.slice(-1)) >= 0) {
            //   $('#test').html(text);
            // }
            var xmlHttp=new XMLHttpRequest();
            var str = "method";
            var url = "/pg/" + word;
            xmlHttp.withCredentials = true;
            xmlHttp.open("GET", url, true);

            xmlHttp.onreadystatechange = function() {
                if(xmlHttp.readyState == 4) {
                    // $('#t2').html(xmlHttp.responseText);
                    context.sync().then(function() {
                        // $('#test').html(url+xmlHttp.status);
                        // $('#test').html(context().getServerUrl());
                        // $('#test').html(xmlHttp.status);
                        $('#t2').html(xmlHttp.responseText);
                    });
                }
            };
            xmlHttp.send();
        }
    }

    // $(document).ready(function () {
    //   $("#div1").css({display:'block', opacity:'0'})
    //     .animate({opacity:'1',left:"+=5px"}, 1500);
    //   $("main").html('<p id="t1"></p><p id="t2"></p>');
    //   search("Welcome");
    // });
})();
