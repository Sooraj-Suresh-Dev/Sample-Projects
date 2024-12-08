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



 var myScrollFunc = function () {
     var y = window.scrollY;
     if (y >= 100) {
         document.getElementById("nav").style.background='#FDE3CA';
     } 
    else if(y==0){
         document.getElementById("nav").style.background='none';
    };
 };

 window.addEventListener("scroll", myScrollFunc);
