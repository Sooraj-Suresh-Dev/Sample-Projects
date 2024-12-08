$(document).ready(function()
{
    $('#form').validate({
        rules:{
            ename:{
                minlength:4,
                maxlength:20,
            },
            email:{
                email: true
            },


        },
        
    })


})
