/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

'use strict';

(function() {
  var currentRequest = '';
  var mainIntervalID = {};
  // The initialize function must be run each time a new page is loaded
  Office.initialize = function(reason) {
    $(document).ready(function() {
      mainIntervalID = window.setInterval(main, 500);
      Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, getText);
    });
  };

  $(document).ready(function() {
    query('welcome');
  });
  function getText() {
    clearInterval(mainIntervalID);
    Office.context.document.getSelectedDataAsync("text", {},
      function(asyncResult) {
        var dataValue = asyncResult.value;
        if (dataValue === '') {
          mainIntervalID = window.setInterval(main, 500);
        } else {
          var five = tailFive(dataValue);
          if (currentRequest != five) {
            currentRequest = five;
            query(currentRequest);
          }
        }

      });
  }

  function tailFive(text) {
    text = text.split(' ');
    if (text.length > 5) {
      text = text.slice(text.length - 6, text.length - 1);
    }
    text = text.join(' ');
    return text;
  }

  function parseData(data) {
    data = JSON.parse(data);
    var suggestions = [];
    for (var i = 1; i < data.length; i++) {
      var pattern = '';
      var count = '';
      var examples = [];
      data[i][0] = data[i][0].replace(data[0][0], data[0][1]);
      pattern = data[i][0].replace(/\</g, '').replace(/\>/g, '').replace('(', '<span class="ui text red">').replace(')', '</span>');
      count = data[i][2];
      if (data[i][1].length != 4) {
        examples = data[i][1].split('|');
        for (var j = 0; j < examples.length; j++) {
          examples[j] = examples[j].replace(data[0][0], data[0][1]);
          examples[j] = examples[j].replace(/\(/g, '<span class="ui text red">').replace(/\)/g, '</span>');
        }
      }
      suggestions.push({
        pattern: pattern,
        count: count,
        examples: examples
      });
    }
    return suggestions;
  }

  function renderResults(suggestions) {
    var html = '';
    for (var i = 0; i < suggestions.length; i++) {
      var examplesStr = '';
      for (var j = 0; j < suggestions[i].examples.length; j++) {
        examplesStr += '<p>' + suggestions[i].examples[j] + '</p>';
      }
      html += '<div class="ui card ms-Grid-row">';
      html += '<div class="content">';
      html += '<div class="header">';
      html += suggestions[i].pattern;
      // html += '<div class="right floated">'
      // html += suggestions[i].count;
      // html += '</div>';
      html += '</div>';
      html += '<div class="description">';
      html += examplesStr;
      html += '</div>';
      html += '</div>';
      html += '</div>';

    }
    $('#result').html(html);
  }

  function query(text) {
    $.get("https://clhsu.pythonanywhere.com/get/" + text).
    done(function(data) {
      var suggestions = parseData(data);
      renderResults(suggestions);
    });
  }


  function main() {
    return Word.run(function(context) {
      var body = context.document.body;
      context.load(body, 'text');
      return context.sync().then(function() {
        var five = tailFive(body.text);
        if (currentRequest != five) {
          currentRequest = five;
          query(currentRequest);
        }
      });
    });

  }

})();
