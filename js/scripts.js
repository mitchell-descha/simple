function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    
    if (inputValue === '') {
        alert('You must write something!');
    } else {
         $('#list').append(li);
    }   

    li.on('click', () => li.toggleClass('strike'));

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', () => li.addClass('delete'));

    $('#list').sortable();
}

$('#input').keydown(function(event) {
    if (event.keyCode === 13) { 
        event.preventDefault();
        $('#button').addClass('hover');
        newItem(); 
        $('#input').val('');
    }
});

$('#input').keyup(function(event) {
    if (event.keyCode === 13) { 
        event.preventDefault();
        $('#button').removeClass('hover');
    }
});