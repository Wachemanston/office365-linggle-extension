var Spinner = {
  /* TODO: Don't make spinner explore to global. Avoid to use $(document) */
  init: function() {
    var spinner = $('.linggle.spinner');
    // Make spinner hide in the beginning
    spinner.hide();
    $(document)
      .ajaxStart(function () {
        spinner.show();
      })
      .ajaxStop(function () {
        spinner.hide();
    });
  },
  /* TODO: Instead of using $(document), use the following functions in ajax callbacks */
  show: function() {
    var spinner = $('.linggle.spinner');
    spinner.show();
  },
  hide: function() {
    var spinner = $('.linggle.spinner');
    spinner.hide();
  }
}
