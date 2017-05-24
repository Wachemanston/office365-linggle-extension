var INPUT_LIST = {
    BOOKMARKS: [],
    AUTOSAVES: [],
    EXAMPLES: [
        'adj. beach',
        'cultivate n.',
        'v. an/a adj. role',
        'go ?to home',
        'how to v. n.',
        'play det. ~important role/part',
    ],
};
var timeoutId = '';
var scrollSwitch = false;

$(document).ready(function() {
    loadLocalStorage();
    renderInputList();
    inputListItemClickEvent();
    inputListItemHoverEvent();

    window.addEventListener('scroll', function(e) {
        if (scrollSwitch) {
            clearTimeout(timeoutId);
            autoSave();
            scrollSwitch = false;
        }
    });

    $('#bookmark-btn').click(function() {
        var query = $('#search-bar').val().trim();
        if (INPUT_LIST.BOOKMARKS.indexOf(query) === -1) {
            INPUT_LIST.BOOKMARKS.push(query);
            updateLocalStorage();
        }
    });

    $('#delete-btn').click(function() {
        $('#search-bar').val('');
        $('#search-bar').trigger('input');
    });
    $('.ui.modal')
        .modal('attach events', '#help-btn', 'show');
//Sign in/up modla control
    $('.coupled.modal')
        .modal({
            allowMultiple: true
        });
    $('.signup.modal')
        .modal('attach events', '#sign-up-btn');
    $('.signin.modal')
        .modal('attach events', '#sign-in-up-btn');
//
    $('#search-bar').on('input', function() {
        var query = escape($('#search-bar').val().trim());
        if (query !== '') {
            resetAutoSaveTimer(3000);
            $('#input-list').hide();
            $.ajax({
                url: '/query/' + query,
                type: 'GET',
                dataType: 'json',
            }).done(function(data) {
                renderSearchResult(data);
                scrollSwitch = true;
            });
        } else {
            renderInputList();
            $('#input-list').show();
        }

    });

});

function renderInputList() {
    $('#input-list').html("");
    var html = '';

    function listToHtml(element, html) {
        return '<tr>' +
            '<td>' + element + '</td>' +
            '<td>' + html + '</td>' +
            '</tr>';
    };

    INPUT_LIST.BOOKMARKS.forEach(function(element) {
        var label = '<div class="ui right ribbon yellow label bookmark"><i class="inverted tag icon"></i></div>';
        html += listToHtml(element, label);
    });

    INPUT_LIST.AUTOSAVES.forEach(function(element) {
        var label = '<div class="ui right ribbon teal label autosave"><i class="inverted wizard icon"></i></div>';
        html += listToHtml(element, label);
    });

    INPUT_LIST.EXAMPLES.forEach(function(element) {
        html += listToHtml(element, '');
    });

    $('#input-list').html(html);
};

function inputListItemClickEvent() {
    $('#input-list').on('click', 'tr td', function() {
        $('#search-bar').val(($(this).text()));
        $('#search-bar').trigger('input');
    });

    $('#input-list').on('click', 'tr td .bookmark', function(e) {
        var item = $(this).parent().siblings(":first").text()
        var index = INPUT_LIST.BOOKMARKS.indexOf(item);
        INPUT_LIST.BOOKMARKS.splice(index, 1);
        renderInputList();
        updateLocalStorage();
    });

    $('#input-list').on('click', 'tr td .autosave', function() {
        var item = $(this).parent().siblings(":first").text()
        var index = INPUT_LIST.AUTOSAVES.indexOf(item);
        INPUT_LIST.AUTOSAVES.splice(index, 1);
        renderInputList();
        updateLocalStorage();
    });
};

function inputListItemHoverEvent() {
    $('.bookmark').popup({
        position: 'right center',
        content: 'Click to remove this bookmark.'
    });
    $('.autosave').popup({
        position: 'right center',
        content: 'Click to remove this autosave.'
    });
};

function renderSearchResult(data) {
    var html = '<tr><td>No result</td></tr>';
    if (data.length !== 0) {
        html = '';
        data.forEach(function(element) {
            html +=
                '<tr>' +
                '<td>' + element.phrase.join(' ') +
                '<div class="ui bottom red attached progress" data-percent="' + /[0-9]+/g.exec(element.percent)[0] + '">' +
                '<div class="bar"></div>' +
                '</div>' +
                '</td>' +
                '<td>' + element.percent + '</td>' +
                '<td>' + element.count_str + '</td>' +
                '<td class="center aligned">' +
                '<button class="ui icon button">' +
                '<i class="icon plus"></i>' +
                '</button>' +
                '</td>' +
                '</tr>';
        });
    }

    $('#search-result').html(html);
    $('.ui.bottom.red.attached.progress').progress();
};

function updateLocalStorage() {
    localStorage.setItem('input-list', JSON.stringify(INPUT_LIST));
}

function loadLocalStorage() {
    var stored = localStorage.getItem('input-list');
    if (stored !== null) INPUT_LIST = JSON.parse(stored);
}

function resetAutoSaveTimer(ms) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
        if ($('#search-bar').val().trim().length !== 0) autoSave();
    }, ms);
}

function autoSave() {
    console.log('auto');
    var query = $('#search-bar').val().trim();
    var length = INPUT_LIST.AUTOSAVES.length;
    var newest = INPUT_LIST.AUTOSAVES[length - 1];

    if (length === 0 && query.length !== 0) {
        INPUT_LIST.AUTOSAVES.push(query);
        length = INPUT_LIST.AUTOSAVES.length;
        newest = INPUT_LIST.AUTOSAVES[length - 1];
    }

    if (query.includes(newest)) {
        INPUT_LIST.AUTOSAVES[length - 1] = query;
    } else {
        INPUT_LIST.AUTOSAVES.push(query);
        length = INPUT_LIST.AUTOSAVES.length;
        newest = INPUT_LIST.AUTOSAVES[length - 1];
    }

    if (length > 5) INPUT_LIST.AUTOSAVES.shift();

    updateLocalStorage();

};
