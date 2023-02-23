
function sendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    };
    emailjs.send("service_sedawv3", "template_t72dfyy", params).then(function (res) {
        alert("Success! " + res.status);
    })
}

const textarea = document.querySelector('textarea');

textarea.addEventListener('input', () => {
  textarea.rows = textarea.value.split('\n').length;
});
