
// delete button
$('ul').on('click', '.delete-btn', function () {
    $(this).closest('li').fadeOut(500, function () {
        $(this).remove();
    });
});


$('ul').on('click', '.text', function () {
const todoText = $(this).text();
$(this).toggleClass('text');
$(this).html(`<input type="text" value="${todoText}"/>`)
});



$('form').on('submit', function (event) {
    event.preventDefault();
    var inputText = $('input[type="text"]').val() //getting the value
    if (inputText === '') return openModal('Please enter a to-do item!'); //this cancels function execution
    $('ul').append(`
    <li>
    <span class ="delete-btn">❌</span>
    <span class="text">${inputText}
    </span>
    </li>
    `);
    $('input[type="text"]').val(''); //setting the value
});

function openModal(message) {
    $('.modal').html(`
    <p>${message}</p>
    <a href="#" rel="modal:close">Close</a>
    `).modal({
        fadeDuration: 500
    });
}