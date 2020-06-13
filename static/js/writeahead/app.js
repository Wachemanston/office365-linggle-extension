/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
import SearResult from './search-result';
import Query from './query';
import NavBar from './navbar';

'use strict';

(function () {

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            $("#div1").css({display:'block', opacity:'0'})
                .animate({opacity:'1',left:"+=5px"}, 1500);
            $("#run").click(initSearch);
            detectText();
            SearResult.setContainer($('#search-result'));
            Query.setContainer($('#query-text'));
            NavBar.setContainer($('#nav-bar-container'));
            NavBar.registerItems([
                {
                    title: 'Patterns',
                    onValue: 'more',
                    offValue: 'less',
                    token: 'pattern',
                    handleToggle: Query.toggleShowMorePatterns.bind(Query),
                },
                {
                    title: 'Examples',
                    onValue: 'more',
                    offValue: 'less',
                    token: 'example',
                    handleToggle: SearResult.toggleMoreExamples.bind(SearResult),
                },
                {
                    title: 'Mode',
                    onValue: 'edit',
                    offValue: 'write',
                    token: 'mode',
                    handleToggle: SearResult.toggleEditingMode.bind(SearResult),
                }
            ]);
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
        Word.run(function(context) {
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
            // TODO: query 'text' or 'word'
            Query.query(text);
            Query.setHandleSuccess((json) => {
                context.sync().then(function() {
                    SearResult.setData(json);
                    SearResult.render();
                });
            });
        }
    }
})();
