$('form').on('submit', function(event) {
    event.preventDefault();
    var inputText = $('input[type="text"]').val()
    $('ul').append('<li>' + inputText + '</li>')
});