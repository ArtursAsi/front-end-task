

$(function() {
    $("form[id='sign-in-form']").validate({


        rules: {

            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
            }
        },
        messages: {
            password: "Please provide a password",
            email: "Invalid email address"
        }

    });
});