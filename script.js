$('#submitButton').on('click', function(){
    $('#contentContainer').prepend('<div class="content"> <img src="person.png" alt="Person Icon"/> <span class="displayName">'+ $('#displayName').val() +'</span> <span class="delete">Delete</span> <span class="edit">Edit</span> <h2>'+ $('#comment').val() +'</h2> </div> ')
})
$('#contentContainer').on('click', '.delete', function (){
    $(this).parent().toggleClass('die')
})
$('#contentContainer').on('click', '.edit', function(){
    $(this).parent().append('<input class="textBox" placeholder="Type changes here"> <span class="submitButton1">Submit</span>')
})
$('#contentContainer').on('click', '.submitButton1', function(){
    $(this).parent().html('<img src="person.png" alt="Person Icon"/> <span class="displayName">'+ $('#displayName').val() +'</span> <span class="delete">Delete</span> <span class="edit">Edit</span> <h2>'+ $('.textBox').val() +'</h2> ')
})