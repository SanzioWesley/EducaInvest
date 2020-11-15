console.log("hello");

function show() {
    var senha = document.getElementById("senha");
    if (senha.type === "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
}


$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})