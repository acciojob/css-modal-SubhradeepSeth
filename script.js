//your JS code here. If required.
document.getElementById("openModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
});

document.addEventListener("click", function (e) {
    if (e.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
});
