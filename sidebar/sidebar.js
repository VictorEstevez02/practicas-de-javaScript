const sidebar = document.querySelector(".sidebar")

function toggleBtn() {
    sidebar.classList.toggle("show-sidebar")
}

function closeBtn() {
    sidebar.classList.remove("show-sidebar")
}