/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

'use strict';

(function () {

  // The initialize function must be run each time a new page is loaded
  Office.initialize = function (reason) {
    $(document).ready(function () {
      Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, getText);
    });
  };

  function getText() {
    Office.context.document.getSelectedDataAsync("text", {},
      function(asyncResult) {
        var dataValue = asyncResult.value;
        $('#search-bar').val(dataValue);
        $('#search-bar-btn').trigger('click');
      });
  }

})();
