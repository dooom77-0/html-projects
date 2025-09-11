document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    // تحقق من صحة النموذج
    if (
        document.getElementById("username").value.trim() !== "" &&
        document.getElementById("Lastname").value.trim() !== ""
    ) {
        window.location.href = "signup2.html";
    }
});