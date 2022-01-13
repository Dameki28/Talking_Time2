function new_user() {
    username = document.getElementById("username").value
    localStorage.setItem("username",username)
    window.location = "talking_time_room.html"
}