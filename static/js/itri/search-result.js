var Example = {
  /* Highlight the ngram string in the example (used in `render` function)*/
  highlight: function(ngramstr, example) {
    var regexp = new RegExp(`(${ngramstr})`, 'ig');
    return example.replace(regexp, '<span class="highlight">$1</span>')
  },
  /* Convert array of example string to HTML string */
  render: function(ngramstr, examples) {
    return `<td><ul>${examples.map((example) => `<li>${this.highlight(ngramstr, example)}</li>`).join('')}</ul></td>`;
  }
}

// TODO: Recommended to split the `Example` related code out.
var SearchResult = {
  query: function(query) {
    $.ajax({
        url: '/query/' + query,
        type: 'GET',
        dataType: 'json',
    })
    .done(this.renderSearchResult)
    .fail(this.renderSearchFail);
  },

  clear: function() {
    var searchResult = $('.linggle.search-result tbody');
    searchResult.html('');
  },

  renderSearchFail: function(data) {
    var searchResult = $('.linggle.search-result tbody');
    var htmlFrag =  `
    <tr><td colspan=4>
    Something goes wrong.
    <button type="button" class="btn btn-danger btn-lg" id="btn-refresh">
      <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>Try again
    </button>
    </td></tr>
    `;
    searchResult.html(htmlFrag);
    $('#btn-refresh').on('click',function(){
      SearchBar.query();
    });
  },

  renderSearchResult: function(data) {
    var searchResult = $('.linggle.search-result tbody');
    var htmlFrag = (data.length > 0) ? '':'<tr><td colspan=4>No result</td></tr>';

    data.forEach(function(element) {
      var ngramstr = element.phrase.join(' ');
      var percentstr = element.percent;
      var countstr = element.count_str;
      var ngramIdstr = element.phrase.join('_');
      // TODO: template literals is in ES6, which is not compatible with IE11
      htmlFrag += `<tr>
        <td class="ngram">${ngramstr}
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: ${percentstr};">
          </div>
        </td>
        <td class="percent">${percentstr}</td>
        <td class="count">${countstr}</td>
        <td class="example">
          <button class="linggle btn btn-green" type="button" data-ngram="${ngramstr}"
          data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Loading"
          data-hide-text="Hide"
          data-show-text="Show"
          >Show</button>
        </td>
      </tr>
      <tr class="examples" id="${ngramIdstr}" data-fetched="false" data-hide="false">
      </tr>`;
    });
    searchResult.html(htmlFrag);

    var exampleBtn = $('.example button');
    var exampleLock = false;

    exampleBtn.on('click', function(){
      var exampleBtn = $(this);
      var ngramIdstr = '#' + exampleBtn.data('ngram').replace(/\ /g , '_');
      var ngramstr = exampleBtn.data('ngram');
      var exampleRow = $(ngramIdstr);

      if (exampleRow.data('fetched') === false) {
        if(!exampleLock) {
          exampleBtn.button('loading');
          exampleLock = true;
          $.ajax({
              url: '/example/' + ngramstr,
              type: 'GET',
              dataType: 'json',
          }).done(function(examples){
            exampleBtn.button('hide');
            exampleRow.html(Example.render(ngramstr, examples));
            exampleRow.data('fetched', "true");
            exampleLock = false;
          }).fail(function(){
            exampleBtn.button('hide');
            exampleRow.html('No result.');
            exampleRow.data('fetched', "true");
            exampleLock = false;
          });
        }
      }
      else {
        exampleRow.toggle();
        if (exampleRow.data('hide') === false) {
          exampleBtn.button('show');
          exampleRow.data('hide', true)
        }
        else {
          exampleBtn.button('hide');
          exampleRow.data('hide', false)
        }
      }
    });
  }
}
