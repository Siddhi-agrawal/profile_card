function updateprofile()
{

    var helper =document.getElementById("name").value;
    document.getElementById("myname").innerHTML=helper;

    var helper =document.getElementById("foname").value;
    document.getElementById("fname").innerHTML=helper;

    var helper =document.getElementById("moname").value;
    document.getElementById("mname").innerHTML=helper;

    var helper =document.getElementById("email").value;
    document.getElementById("emailname").innerHTML=helper;

    var helper =document.getElementById("number").value;
    document.getElementById("age").innerHTML=helper;

    var helper =document.getElementById("iddob").value;
    document.getElementById("dob").innerHTML=helper;

    var helper =document.getElementById("dropdown").value;
    document.getElementById("dept").innerHTML=helper;

    var helper =document.querySelector('input[name="radio-buttons"]:checked');
    document.getElementById("gender").innerHTML=helper.value;

    var helper =document.getElementById("comments").value;
    document.getElementById("address").innerHTML=helper;

}