$(document).ready(function() {
    $('.submit').click(function(event) {
        console.log('Clicked')

        var name = $('.name').val()
        var email = $('.email').val()
        var message = $('.message').val()
        var name_div = $('.name_div')
        var email_div = $('.email_div')
        var message_div = $('.message_div')
        email_div.empty()
        message_div.empty()
        name_div.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            console.log('Email correct');
        } else {
            event.preventDefault()
            email_div.append('<div class="status">Email is not valid.</div>');
        }

        if (name.length > 5) {
            console.log('Name correct');
        } else {
            event.preventDefault()
            name_div.append('<div class="status">Name is not valid.</div>');
        }

        if (message.length >= 10) {
            console.log('Message correct');
        } else {
            event.preventDefault()
            message_div.append('<div class="status">Message is not valid.</div>');
        }
    })
})